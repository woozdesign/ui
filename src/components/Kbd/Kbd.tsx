'use client';
import classNames from 'classnames';
import React from 'react';
import styles from './Kbd.module.scss';
import { KbdProps } from './Kbd.props';

const Kbd: React.FC<KbdProps> = ({ shortcut, variant = 'solid', size = 'medium', color }) => {
  const classes = classNames(styles.kbd, styles[`kbd--${variant}`], styles[`kbd--${size}`]);
  return (
    <div className={styles.wrapper}>
      {shortcut.map((code) => {
        return (
          <kbd key={code} className={classes} data-accent-color={color}>
            {code}
          </kbd>
        );
      })}
    </div>
  );
};

export default Kbd;
