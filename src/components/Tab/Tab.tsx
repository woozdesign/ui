'use client';
import classNames from 'classnames';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
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
      <div className={classes}>{children}</div>
    </TabContext.Provider>
  );
};

export const List: FC<ListProps> = (props) => {
  const { children, justify = 'start' } = props;
  const context = useContext(TabContext);
  if (!context) throw new Error('Trigger must be used within Root');

  return (
    <div className={styles.listWrapper}>
      <ScrollArea id="tab-scroll" direction={'horizontal'} invisible>
        <div className={styles.list} style={{ justifyContent: justify }}>
          {children}
          <div id={'tab-backdrop'} className={styles.menuBackdrop}></div>
        </div>
      </ScrollArea>
    </div>
  );
};

export const Trigger: FC<TriggerProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, variant = 'outlined', value, color, size = 'medium', radius, highContrast = false, onClick } = otherMarginProps;

  const context = useContext(TabContext);
  if (!context) throw new Error('Trigger must be used within Root');

  const { activeTab, setActiveTab } = context;

  const classes = classNames(
    styles.trigger,
    styles[`trigger--${variant}`],
    {
      [styles['highContrast']]: highContrast,
      [styles['active']]: value === activeTab,
    },
    className,
    withBreakpoints(size, 'wt-tab--trigger', styles),
    withMarginProps(marginProps),
  );
  const triggerRef = useRef<HTMLAnchorElement>(null);
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
      ref={triggerRef}
      data-accent-color={color}
      data-radius={radius}
      className={classes}
      onClick={() => {
        setActiveTab(value);
        onClick && onClick();
      }}
    >
      <div className={styles.content}>{children}</div>
    </a>
  );
};

export const Content: FC<ContentProps> = (props) => {
  const { className, style, children, value } = props;

  const classes = classNames(styles.content, className);

  const context = useContext(TabContext);
  if (!context) throw new Error('Content must be used within Root');
  const { activeTab } = context;

  return activeTab === value ? <div className={classes}>{children}</div> : null;
};

export const Tab = {
  Root,
  List,
  Trigger,
  Content,
};
export default Tab;
