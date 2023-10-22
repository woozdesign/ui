'use client';
import classNames from 'classnames';
import React, { FC, useContext, useState } from 'react';
import styles from './Tab.module.scss';
import { ContentProps, ListProps, RootProps, TabContextProps, TriggerProps } from './Tab.props';
import { extractMarginProps, withMarginProps } from '@/utils';

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

export const List: FC<ListProps> = ({ children, justify = 'center' }) => {
  return (
    <div className={styles.list} style={{ justifyContent: justify }}>
      {children}
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
    styles[`trigger--${size}`],
    {
      [styles['highContrast']]: highContrast,
      [styles['active']]: value === activeTab,
    },
    className,
    withMarginProps(marginProps),
  );

  return (
    <a
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
