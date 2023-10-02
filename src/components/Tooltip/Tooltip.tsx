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
    <div className={styles.tooltipContainer}>
      {children}
      <div className={`${styles.tooltip}`} style={{ [positionProp == 'top' ? 'bottom' : 'top']: '125%' }}>
        <Typography.Text size="small" color={'gray'}>
          {content}
        </Typography.Text>
      </div>
    </div>
  );
};

export default Tooltip;
