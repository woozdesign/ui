'use client';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInput';
import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import Typography from '../Typography';
import styles from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.props';

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

  const classNameList = classNames(styles.checkbox, styles[`checkbox--${size}`], isChecked && styles['checkbox--checked'], isDisabled && styles['checkbox--disabled']);

  return (
    <div className={styles.wrapper}>
      <div className={classNameList} data-accent-color={color} data-radius={radius} onClick={handleCheckboxClick}>
        <input type="checkbox" {...props} className={styles.input} onChange={handleChange} onInvalid={handleInvalid} disabled={isDisabled} checked={isChecked} />
        <span className={classNames(styles.checkmark, error && styles['error'])}>{isChecked && <Icon type={'Check'} size={size} />}</span>
        {label && (
          <Typography.Text className={styles.label}>
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
