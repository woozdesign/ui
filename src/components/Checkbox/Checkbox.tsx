'use client';
import { extractMarginProps, isBreakpointsObject, withBreakpoints, withMarginProps } from '@/utils';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInput';
import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import Typography from '../Typography';
import styles from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.props';

const Checkbox: FC<CheckboxProps> = (props) => {
  const { others: marginOtherProps, ...marginProps } = extractMarginProps(props);
  const { className, style, color, radius, size = 'medium', highContrast, onChange, label, hasSubmitted, checked, defaultChecked, ...otherProps } = marginOtherProps;
  const [isChecked, setIsChecked] = useState(defaultChecked || false);
  const [isDisabled, setIsDisabled] = useState(otherProps.disabled || false);

  const classes = classNames(
    styles.checkbox,
    isChecked && styles['checkbox--checked'],
    isDisabled && styles['checkbox--disabled'],
    { [styles['highContrast']]: highContrast },
    withBreakpoints(size, 'wd-checkbox', styles),
    withMarginProps(marginProps),
    className,
  );

  const [error, setError] = useState<string | null>(null);

  const handleCheckboxClick = useCallback(() => {
    if (!isDisabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      if (otherProps.required && !newState) {
        setError('It is required');
      } else {
        setError(null);
      }
      if (onChange) onChange();
    }
  }, [isDisabled, isChecked, onChange, otherProps.required]);

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

  return (
    <div className={styles.wrapper}>
      <div className={classes} data-accent-color={color} data-radius={radius} onClick={handleCheckboxClick} style={style}>
        <input type="checkbox" {...otherProps} className={styles.input} onChange={handleChange} onInvalid={handleInvalid} disabled={isDisabled} checked={isChecked} />
        <span className={classNames(styles.checkmark, error && styles['error'])}>{isChecked && <Icon type={'Check'} size={'dynamic'} />}</span>
        {label && (
          <Typography.Text className={styles.label}>
            {otherProps.required && <span style={{ color: 'var(--color-red-9)', marginRight: '4px' }}>*</span>}
            {label}
          </Typography.Text>
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Checkbox;
