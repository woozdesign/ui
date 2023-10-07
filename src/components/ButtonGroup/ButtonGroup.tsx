// ButtonGroup.tsx

import React, { FC, ReactNode } from 'react';
import { combineClassNames } from '@/utils/helper/combineClassNames';
import styles from './ButtonGroup.module.scss';

export interface ButtonGroupProps {
  children: ReactNode;
  spacing?: 'small' | 'medium' | 'large';
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children, spacing = 'medium' }) => {
  const classNameList = [styles.buttonGroup, styles[`buttonGroup--${spacing}`]];

  return <div className={combineClassNames(classNameList)}>{children}</div>;
};

export default ButtonGroup;
