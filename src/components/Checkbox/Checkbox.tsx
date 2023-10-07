import React, { FC, HTMLProps, ChangeEvent, useState, useEffect, useCallback } from 'react';
import styles from './Checkbox.module.scss';
import { ColorProp, RadiusProp, SizeProp, combineClassNames } from '@/utils';
import { FormChildProps } from '../Form/Form';
import Typography from '../Typography';
import { Icon } from '@woozdesign/icons';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInput';

interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, ColorProp, SizeProp, RadiusProp, FormChildProps {
  onChange?: () => void;
  label?: string;
}

const Checkbox: FC<CheckboxProps> = ({ color, radius, size = 'medium', onChange, label, hasSubmitted, ...props }) => {
  const [isChecked, setIsChecked] = useState(props.checked || false);
  const [isDisabled, setIsDisabled] = useState(props.disabled || false);

  const [error, setError] = useState<string | null>(null);

  const handleCheckboxClick = useCallback(() => {
    if (!isDisabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      if (props.required && !newState) {
        setError('It is required');
      } else {
        setError(null);
      }
      if (onChange) onChange();
    }
  }, [isDisabled, isChecked, onChange, props.required]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleCheckboxClick();
  };

  const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
    validateInput(e.target as HTMLInputElement);
  };

  const validateInput = (input: HTMLInputElement) => {
    if (isChecked) {
      setError(null);
    } else {
      setError(getErrorBasedOnValidity(input, 'It is required'));
    }
  };

  const classNameList = [styles.checkbox, styles[`checkbox--${size}`], isChecked ? styles['checkbox--checked'] : '', isDisabled ? styles['checkbox--disabled'] : ''];

  return (
    <div className={styles.wrapper}>
      <div className={combineClassNames(classNameList)} data-accent-color={color} data-radius={radius} onClick={handleCheckboxClick}>
        <input type="checkbox" {...props} className={styles.input} onChange={handleChange} onInvalid={handleInvalid} disabled={isDisabled} checked={isChecked} />
        <span className={combineClassNames([styles.checkmark, error ? styles['error'] : ''])}>{isChecked && <Icon type={'Check'} size={size} />}</span>
        {label && (
          <Typography.Text className={combineClassNames([styles.label])} size={size}>
            {props.required && <span style={{ color: 'var(--color-red-9)', marginRight: '4px' }}>*</span>}
            {label}
          </Typography.Text>
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Checkbox;
