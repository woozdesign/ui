'use client';
import React, { FC, ChangeEvent, useState } from 'react';
import styles from './TextField.module.scss';
import Typography from '../Typography/Typography';
import { combineClassNames } from '@/utils/helper/combineClassNames';

interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  size?: 'large' | 'medium' | 'small';
  label?: string;
  iconPrepend?: JSX.Element;
  iconAppend?: JSX.Element;
  block?: boolean;
  hasSubmitted?: boolean;
  pattern?: string;
  errorMessage?: string; // Custom error message prop
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const TextField: FC<TextFieldProps> = ({ size = 'medium', label, iconPrepend, iconAppend, block, errorMessage, onChange, onSubmit, hasSubmitted = false, ...others }) => {
  const groupClasses = [styles.group, styles[size], block ? styles.block : ''];
  const inputClasses = [styles.input, iconPrepend ? styles.hasPrependIcon : ''];

  const [error, setError] = useState<string | null>(null);

  const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
    validateInput(e.target);
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (hasSubmitted || e.target.value) validateInput(e.target);
    if (onChange) onChange(e);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSubmit) {
      if (hasSubmitted) validateInput(event.target as HTMLInputElement);
      onSubmit();
    }
  };

  const getErrorBasedOnValidity = (input: HTMLInputElement) => {
    if (errorMessage) return errorMessage;
    if (input.validity.valueMissing) return 'This field is required';
    if (input.validity.typeMismatch) return 'Invalid format';
    if (input.validity.patternMismatch) return 'Not valid input';
    if (input.validity.tooShort) return `Field should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
    return 'Invalid input';
  };
  const validateInput = (input: HTMLInputElement) => {
    if (input.validity.valid) {
      setError(null);
    } else {
      setError(getErrorBasedOnValidity(input));
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <Typography.Paragraph type={'secondary'} size={'small'} className={styles.label}>
          {others.required && <span style={{ color: 'var(--color-error)', marginRight: '4px' }}>*</span>}
          {label}
        </Typography.Paragraph>
      )}
      <div className={combineClassNames(groupClasses)}>
        {iconPrepend && <span className={styles.iconPrepend}>{iconPrepend}</span>}
        <input
          {...others}
          data-has-value={hasSubmitted}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          onInvalid={handleInvalid}
          className={combineClassNames([...inputClasses, error ? styles.inputError : ''])}
        />

        {iconAppend && <span className={styles.iconAppend}>{iconAppend}</span>}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextField;
