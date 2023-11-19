/* eslint-disable react/display-name */
'use client';
import classNames from 'classnames';
import React, { FC, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import styles from './Segmented.module.scss';
import { ContentProps, ListProps, RootProps, SegmentedContextProps, TriggerProps } from './Segmented.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import ScrollArea from '../ScrollArea';

const SegmentedContext = React.createContext<SegmentedContextProps | undefined>(undefined);

export const Root: FC<RootProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, defaultValue } = otherMarginProps;

  const classes = classNames(styles.root, className, withMarginProps(marginProps));

  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  return (
    <SegmentedContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={classes} style={style}>
        {children}
      </div>
    </SegmentedContext.Provider>
  );
};

export const List: FC<ListProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, block, justify = 'start', color, shadow, size = 'medium', radius, highContrast = false } = otherMarginProps;
  const context = useContext(SegmentedContext);
  if (!context) throw new Error('Trigger must be used within Root');

  const wrapperClasses = classNames(styles.listWrapper, {
    [styles['block']]: block,
  });
  const classes = classNames(
    styles.list,
    className,
    {
      [styles['highContrast']]: highContrast,
    },
    withBreakpoints(size, 'wd-segmented--list', styles),
  );

  return (
    <div data-shadow={shadow} data-radius={radius} data-accent-color={color} className={wrapperClasses}>
      <ScrollArea id="segmented-scroll" direction={'horizontal'} invisible>
        <div className={classes} style={{ justifyContent: justify, ...style }}>
          {children}
          <div id={'segmented-backdrop'} className={styles.menuBackdrop}></div>
        </div>
      </ScrollArea>
    </div>
  );
};

export const Trigger = forwardRef<HTMLAnchorElement, TriggerProps>((props, ref) => {
  const { className, style, children, value, onClick, href } = props;

  const context = useContext(SegmentedContext);
  if (!context) throw new Error('Trigger must be used within Root');

  const { activeTab, setActiveTab } = context;

  const classes = classNames(
    styles.trigger,
    {
      [styles['active']]: value === activeTab,
    },
    className,
  );
  const triggerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef(null);

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveTab(value);

    onClick && onClick(e);
  };

  useEffect(() => {
    if (activeTab == value) {
      setTimeout(() => {
        moveBackDrop();
      }, 50);
    }
  }, [activeTab]);

  const moveBackDrop = () => {
    const triggerEl = triggerRef.current;
    if (!triggerEl) return;
    const scrollArea = triggerEl.closest('#segmented-scroll') as HTMLElement;
    const backdropEl = scrollArea ? (scrollArea.querySelector('#segmented-backdrop') as HTMLElement) : null;

    if (backdropEl) {
      const triggerLeftRelativeToScrollArea = triggerEl.getBoundingClientRect().left - scrollArea.getBoundingClientRect().left;

      backdropEl.style.setProperty('--block-top', `var(--space-1)`);
      backdropEl.style.setProperty('--block-left', `calc(${triggerLeftRelativeToScrollArea}px + ${scrollArea.scrollLeft}px )`);
      backdropEl.style.setProperty('--block-height', `calc(${triggerEl.clientHeight}px - var(--space-2)`);
      backdropEl.style.setProperty('--block-width', `${triggerEl.clientWidth}px`);
      backdropEl.style.setProperty('opacity', '1');
      backdropEl.style.setProperty('visibility', 'visible');
    }
  };

  return (
    <a className={classes} ref={ref} href={href} style={style} onClick={handleOnClick}>
      <span ref={triggerRef} className={styles.content}>
        {children}
      </span>
    </a>
  );
});

export const Content: FC<ContentProps> = (props) => {
  const { className, style, children, value } = props;

  const classes = classNames(styles.tabContent, className);

  const context = useContext(SegmentedContext);
  if (!context) throw new Error('Content must be used within Root');
  const { activeTab } = context;

  return activeTab === value ? (
    <div className={classes} style={style}>
      {children}
    </div>
  ) : null;
};

export const Segmented = {
  Root,
  List,
  Trigger,
  Content,
};
export default Segmented;
