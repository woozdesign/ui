/* eslint-disable react/display-name */
import React, { FC, ReactNode } from 'react';
import styles from './AppBar.module.scss';

interface AppBarProps {
  children: ReactNode;
}

const AppBar: FC<AppBarProps> & {
  Heading: FC<HeadingProps>;
  Body: FC<BodyProps>;
  Action: FC<ActionProps>;
} = ({ children }) => {
  return <div className={styles.appBar}>{children}</div>;
};

interface HeadingProps {
  children: ReactNode;
}

AppBar.Heading = ({ children }: HeadingProps): JSX.Element => {
  return <div className={styles.heading}>{children}</div>;
};

interface BodyProps {
  children?: ReactNode;
}
AppBar.Body = ({ children }: BodyProps): JSX.Element => {
  return <div className={styles.body}>{children}</div>;
};

interface ActionProps {
  children?: ReactNode;
}
AppBar.Action = ({ children }: ActionProps): JSX.Element => {
  return <div className={styles.action}>{children}</div>;
};

export default AppBar;
