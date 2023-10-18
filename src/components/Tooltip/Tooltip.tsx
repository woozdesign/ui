'use client';
import React, { FC } from 'react';
import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';

const Tooltip: FC<TooltipProps> = ({ content, position: positionProp = 'top', children }) => {
  return (
    <div className={`${styles.tooltip}`} data-position={positionProp}>
      {children}
      <div className={`${styles.tooltiptext}`}>
        <div className={styles.ellipsisContent}>{content}</div>
      </div>
    </div>
  );
};

export default Tooltip;
