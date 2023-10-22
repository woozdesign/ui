'use client';
import classNames from 'classnames';
import React from 'react';
import styles from './Kbd.module.scss';
import { KbdProps } from './Kbd.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';

const Kbd: React.FC<KbdProps> = (props) => {
  const { others: marginOtherProps, ...marginProps } = extractMarginProps(props);
  const { shortcut, variant = 'solid', size = 'medium', color } = marginOtherProps;
  const wrapperClasses = classNames(styles.wrapper, withMarginProps(marginProps));
  const kbdClasses = classNames(styles.kbd, styles[`kbd--${variant}`], withBreakpoints(size, 'wd-kbd', styles));
  return (
    <div className={wrapperClasses}>
      {shortcut.map((code) => {
        return (
          <kbd key={code} className={kbdClasses} data-accent-color={color}>
            {code}
          </kbd>
        );
      })}
    </div>
  );
};

export default Kbd;
