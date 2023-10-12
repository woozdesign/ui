'use client';
import { ColorProp, HighContrastProp, RadiusProp, SizeProp } from '@/utils';
import classNames from 'classnames';
import React, { FC, ReactNode, useContext, useState } from 'react';
import styles from './Tab.module.scss';

interface TabContextProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabContext = React.createContext<TabContextProps | undefined>(undefined);

interface RootProps {
  children: ReactNode;
  defaultValue: string;
}

export const Root: FC<RootProps> = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={styles.root}>{children}</div>
    </TabContext.Provider>
  );
};

export interface ListProps {
  justify?: 'center' | 'end' | 'space-between' | 'start';
  children: ReactNode;
}

export const List: FC<ListProps> = ({ children, justify = 'center' }) => {
  return (
    <div className={styles.list} style={{ justifyContent: justify }}>
      {children}
    </div>
  );
};

export interface TriggerProps extends ColorProp, SizeProp, RadiusProp, HighContrastProp {
  value: string;
  onClick?: () => void;
  children: ReactNode;
}

export const Trigger: FC<TriggerProps> = ({ value, children, color, size = 'medium', radius, highContrast = false, onClick }) => {
  const context = useContext(TabContext);
  if (!context) throw new Error('Trigger must be used within Root');
  const { activeTab, setActiveTab } = context;
  const classes = classNames(styles.trigger, styles[`trigger--${size}`], {
    [styles['trigger--high-contrast']]: highContrast,
    [styles['active']]: value === activeTab,
  });

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

interface ContentProps {
  value: string;
  children: ReactNode;
}

export const Content: FC<ContentProps> = ({ value, children }) => {
  const context = useContext(TabContext);
  if (!context) throw new Error('Content must be used within Root');
  const { activeTab } = context;

  return activeTab === value ? <div className={styles.content}>{children}</div> : null;
};

export const Tab = {
  Root,
  List,
  Trigger,
  Content,
};
export default Tab;
