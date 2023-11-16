/* eslint-disable react/display-name */
'use client';
import classNames from 'classnames';
import React, { FC, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import styles from './Tab.module.scss';
import { ContentProps, ListProps, RootProps, TabContextProps, TriggerProps } from './Tab.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import ScrollArea from '../ScrollArea';

const TabContext = React.createContext<TabContextProps | undefined>(undefined);

export const Root: FC<RootProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, defaultValue } = otherMarginProps;

  const classes = classNames(styles.root, className, withMarginProps(marginProps));

  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={classes} style={style}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

export const List: FC<ListProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, block, justify = 'start', variant = 'outlined', color, shadow, size = 'medium', radius, highContrast = false } = otherMarginProps;
  const context = useContext(TabContext);
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
    withBreakpoints(size, 'wd-tab--list', styles),
  );

  return (
    <div data-variant={variant} data-shadow={shadow} data-radius={radius} data-accent-color={color} className={wrapperClasses}>
      <ScrollArea id="tab-scroll" direction={'horizontal'} invisible>
        <div className={classes} style={{ justifyContent: justify, ...style }}>
          {children}
          <div id={'tab-backdrop'} className={styles.menuBackdrop}></div>
        </div>
      </ScrollArea>
    </div>
  );
};

export const Trigger = forwardRef<HTMLAnchorElement, TriggerProps>((props, ref) => {
  const { className, style, children, value, onClick, href } = props;

  const context = useContext(TabContext);
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

  useEffect(() => {
    const triggerEl = triggerRef.current;
    if (!triggerEl) return;
    const scrollArea = triggerEl.closest('#tab-scroll') as HTMLElement;
    const backdropEl = scrollArea ? (scrollArea.querySelector('#tab-backdrop') as HTMLElement) : null;

    const handleMouseEnter = () => {
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

    const handleMouseLeave = () => {
      if (backdropEl) {
        backdropEl.style.setProperty('opacity', '0');
        backdropEl.style.setProperty('visibility', 'hidden');
      }
    };

    if (triggerEl && backdropEl) {
      triggerEl.addEventListener('mouseenter', handleMouseEnter);
      triggerEl.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (triggerEl && backdropEl) {
        triggerEl.removeEventListener('mouseenter', handleMouseEnter);
        triggerEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className={classes}
      style={style}
      onClick={() => {
        setActiveTab(value);
        onClick && onClick();
      }}
    >
      <div ref={triggerRef} className={styles.content}>
        {children}
      </div>
    </a>
  );
});

export const Content: FC<ContentProps> = (props) => {
  const { className, style, children, value } = props;

  const classes = classNames(styles.tabContent, className);

  const context = useContext(TabContext);
  if (!context) throw new Error('Content must be used within Root');
  const { activeTab } = context;

  return activeTab === value ? (
    <div className={classes} style={style}>
      {children}
    </div>
  ) : null;
};

export const Tab = {
  Root,
  List,
  Trigger,
  Content,
};
export default Tab;
