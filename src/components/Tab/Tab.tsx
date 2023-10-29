'use client';
import classNames from 'classnames';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import styles from './Tab.module.scss';
import { ContentProps, ListProps, RootProps, TabContextProps, TriggerProps } from './Tab.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';

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
  const { children, justify = 'center' } = props;
  const context = useContext(TabContext);
  if (!context) throw new Error('Trigger must be used within Root');

  return (
    <div className={styles.list} style={{ justifyContent: justify }}>
      {children}
      <div className={styles.menuBackdrop} id={`${context.id}-backdrop`}></div>
    </div>
  );
};

export const Trigger: FC<TriggerProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, value, color, size = 'medium', radius, highContrast = false, onClick } = otherMarginProps;

  const context = useContext(TabContext);
  if (!context) throw new Error('Trigger must be used within Root');

  const { activeTab, setActiveTab } = context;

  const classes = classNames(
    styles.trigger,
    {
      [styles['highContrast']]: highContrast,
      [styles['active']]: value === activeTab,
    },
    className,
    withBreakpoints(size, 'wt-tab--trigger', styles),
    withMarginProps(marginProps),
  );
  const triggerRef = useRef(null);
  const backdropRef = useRef(null);
  useEffect(() => {
    const triggerEl = triggerRef.current;
    const backdropEl = document.querySelector(`${context.id}-backdrop`);

    if (triggerEl && backdropEl) {
      triggerEl.addEventListener('mouseenter', function () {
        backdropEl.style.setProperty('--block-top', ''.concat(triggerEl.getBoundingClientRect().top, 'px'));
        backdropEl.style.setProperty('--block-left', ''.concat(`calc(${triggerEl.getBoundingClientRect().left}px - var(--space-4))`));
        backdropEl.style.setProperty('--block-height', ''.concat(triggerEl.clientHeight, 'px'));
        backdropEl.style.setProperty('--block-width', ''.concat(triggerEl.clientWidth, 'px'));
        backdropEl.style.setProperty('opacity', '1');
        backdropEl.style.setProperty('visibility', 'visible');
      });

      triggerEl.addEventListener('mouseleave', function () {
        backdropEl.style.setProperty('opacity', '0');
        backdropEl.style.setProperty('visibility', 'hidden');
      });
    }

    // Cleanup listeners on component unmount
    return () => {
      if (triggerEl) {
        triggerEl.removeEventListener('mouseenter');
        triggerEl.removeEventListener('mouseleave');
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
      {children}
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
