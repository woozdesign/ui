import React from 'react';
import styles from './Kbd.module.scss';
import { ColorProp, SizeProp, combineClassNames } from '@/utils';
import { WoozCommandCode } from '@/utils/contexts/Shortcut/Shortcut.props';

interface KbdProps extends ColorProp, SizeProp {
  variant?: 'solid' | 'soft';
  shortcut: WoozCommandCode[];
}

const Kbd: React.FC<KbdProps> = ({ shortcut, variant = 'solid', size = 'medium', color }) => {
  const classes = [styles.kbd, styles[`kbd--${variant}`], styles[`kbd--${size}`]];
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
