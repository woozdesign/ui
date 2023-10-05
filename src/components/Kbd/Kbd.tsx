import React from 'react';
import styles from './Kbd.module.scss';
import { ColorProp, combineClassNames } from '@/utils';
import { WoozCommandCode } from '@/utils/contexts/Shortcut/Shortcut.props';

interface KbdProps extends ColorProp {
  variant?: 'primary' | 'secondary';
  shortcut: WoozCommandCode[];
}

const Kbd: React.FC<KbdProps> = ({ shortcut, variant = 'primary', color }) => {
  const classes = [styles.kbd, styles[`kbd--${variant}`]];
  return (
    <div className={styles.wrapper}>
      {shortcut.map((code) => {
        return (
          <kbd key={code} className={combineClassNames(classes)} data-accent-color={color}>
            {code}
          </kbd>
        );
      })}
    </div>
  );
};

export default Kbd;
