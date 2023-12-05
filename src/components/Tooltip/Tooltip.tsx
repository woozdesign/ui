'use client';
import React, { FC } from 'react';
import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';
import classNames from 'classnames';

const Tooltip: FC<TooltipProps> = (props) => {
  const { className, style, children, label, placement = 'top' } = props;

  const classes = classNames(styles.tooltip, className);

  return (
    <div className={classes} data-placement={placement} style={style}>
      {children}
      <div className={`${styles.tooltiptext}`}>
        <div className={styles.ellipsisContent}>{label}</div>
      </div>
    </div>
  );
};

export default Tooltip;
