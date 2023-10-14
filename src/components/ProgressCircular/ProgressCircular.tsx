'use client';
import React, { FC } from 'react';
import styles from './ProgressCircular.module.scss';
import { ProgressCircularProps } from './ProgressCircular.props';

const ProgressCircular: FC<ProgressCircularProps> = ({ value = 0, indeterminate, color, size, rounded = false }) => {
  if (value > 100) value = 100;
  if (value < 0) value = 0;

  let sizeMultiplier = 1;
  switch (size) {
    case 'small':
      sizeMultiplier = 0.75;
      break;
    case 'large':
      sizeMultiplier = 1.25;
      break;
    case 'xlarge':
      sizeMultiplier = 1.5;
      break;
  }
  const radius = 16 * sizeMultiplier;
  const circumference = 2 * Math.PI * radius;
  const progress = value && value > 0 ? ((100 - value) / 100) * circumference : 0;

  return (
    <div data-accent-color={color} className={`${styles.progressCircular} ${indeterminate ? styles.indeterminate : ''} ${size ? styles[size] : ''}`}>
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={radius} strokeWidth={4 * sizeMultiplier} fill="none" className={styles.circularBackground} />
        {(value && value > 0) || indeterminate ? (
          <circle
            cx="32"
            cy="32"
            r={radius}
            strokeWidth={4 * sizeMultiplier}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? 0 : progress}
            className={styles.circularPath}
            strokeLinecap={rounded ? 'round' : 'butt'} // Apply the stroke linecap based on the rounded prop
          />
        ) : null}
      </svg>
    </div>
  );
};

export default ProgressCircular;
