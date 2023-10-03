import React from 'react';
import styles from './Kbd.module.scss';

interface KbdProps {
  children: React.ReactNode;
}

const Kbd: React.FC<KbdProps> = ({ children }) => {
  return <kbd className={styles.kbdStyle}>{children}</kbd>;
};

export default Kbd;
