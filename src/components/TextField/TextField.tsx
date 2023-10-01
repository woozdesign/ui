'use client';
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React, { ChangeEvent, FC, useState } from 'react';
import Typography from '../Typography/Typography';
import styles from './TextField.module.scss';
import { FormChildProps } from '../Form/Form';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInpuy';

export interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'>, FormChildProps {
  variant?: 'primary' | 'secondary';
  size?: 'large' | 'medium' | 'small';
  label?: string;
  iconPrepend?: JSX.Element;
  iconAppend?: JSX.Element;
  block?: boolean;
  pattern?: string;
  errorMessage?: string; // Custom error message prop
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const TextField: FC<TextFieldProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  iconPrepend,
  iconAppend,
  block,
  errorMessage,
  onChange,
  onSubmit,
  hasSubmitted = false,
  ...others
}) => {
  const groupClasses = [styles.group, styles[size], block ? styles.block : ''];
  const inputClasses = [styles.input, iconPrepend ? styles.hasPrependIcon : ''];

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
    <div className={combineClassNames([styles.wrapper, styles[size]])}>
      {label && (
        <div>
          <Typography.Paragraph type={'secondary'} size={'small'} className={styles.label}>
            {others.required && <span style={{ color: 'var(--color-red-9)', marginRight: '4px' }}>*</span>}
            {label}
          </Typography.Paragraph>
        </div>
      )}
      <div className={combineClassNames(groupClasses)}>
        {iconPrepend && <span className={styles.iconPrepend}>{iconPrepend}</span>}
        <input
          {...others}
          data-has-value={hasSubmitted}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          onInvalid={handleInvalid}
          className={combineClassNames([...inputClasses, error ? styles.inputError : '', styles[`input--${variant}`]])}
        />
        {iconAppend && <span className={styles.iconAppend}>{iconAppend}</span>}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextField;
