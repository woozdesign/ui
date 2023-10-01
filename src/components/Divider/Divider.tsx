import React from 'react';
import styles from './Divider.module.scss';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal' }) => {
  return <div className={orientation === 'horizontal' ? styles.horizontal : styles.vertical}></div>;
};

export default Divider;
