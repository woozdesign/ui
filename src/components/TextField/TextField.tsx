'use client';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInput';
import classNames from 'classnames';
import React, { ChangeEvent, FC, useState } from 'react';
import Typography from '../Typography/Typography';
import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.props';

const TextField: FC<TextFieldProps> = ({
  variant = 'solid',
  size = 'medium',
  label,
  iconPrepend,
  iconAppend,
  block,
  errorMessage,
  onChange,
  onSubmit,
  color,
  radius,
  hasSubmitted = false,
  ...others
}) => {
  const groupClasses = classNames(styles.group, styles[size], block && styles.block);
  const inputClasses = classNames(styles.input, iconPrepend && styles.hasPrependIcon);

  const [error, setError] = useState<string | null>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (hasSubmitted || e.target.value) validateInput(e.target);
    if (onChange) onChange(e);
  };

  const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
    validateInput(e.target as HTMLInputElement);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || onSubmit) {
      if (hasSubmitted) validateInput(event.target as HTMLInputElement);
      onSubmit && onSubmit();
    }
  };

  const validateInput = (input: HTMLInputElement) => {
    if (input.validity.valid) {
      setError(null);
    } else {
      setError(getErrorBasedOnValidity(input, errorMessage));
    }
  };

  return (
    <div data-accent-color={color} data-radius={radius} className={classNames(styles.wrapper, styles[size])}>
      {label && (
        <div>
          <Typography.Text variant={'div'} className={styles.label}>
            {others.required && <span style={{ color: 'var(--color-red-9)', marginRight: '4px' }}>*</span>}
            {label}
          </Typography.Text>
        </div>
      )}
      <div className={groupClasses}>
        {iconPrepend && <span className={styles.iconPrepend}>{iconPrepend}</span>}
        <input
          {...others}
          data-has-value={hasSubmitted}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          onInvalid={handleInvalid}
          className={classNames(inputClasses, error && styles.inputError, styles[`input--${variant}`])}
        />
        {iconAppend && <span className={styles.iconAppend}>{iconAppend}</span>}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextField;
