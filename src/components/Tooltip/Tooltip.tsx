'use client';
import React, { FC, ReactNode } from 'react';
import styles from './Tooltip.module.scss';
import Typography from '../Typography';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom';
  children: ReactNode;
}
const Tooltip: FC<TooltipProps> = ({ content, position: positionProp = 'top', children }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={`${styles.tooltiptext}`}>
        <div className={styles.ellipsisContent}>{content}</div>
      </div>
    </div>
  );
};

export default Tooltip;
