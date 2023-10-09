'use client';
import React, { FC, HTMLProps, ChangeEvent, useState } from 'react';
import styles from './TextArea.module.scss';
import { combineClassNames } from '@/utils/helper/combineClassNames';
import Typography from '../Typography/Typography';
import { FormChildProps } from '../Form/Form';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInput';

interface TextAreaProps extends FormChildProps, Omit<HTMLProps<HTMLTextAreaElement>, 'size'> {
  variant?: 'solid' | 'soft';
  size?: 1 | 2 | 3 | 4 | 5; // Number of visible lines
  label?: string;
  resizable?: boolean;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => void;
}

const TextArea: FC<TextAreaProps> = ({ variant = 'solid', size = 2, label, resizable = false, errorMessage, hasSubmitted = false, onChange, onSubmit, ...others }) => {
  const [error, setError] = useState<string | null>(null);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (hasSubmitted || e.target.value) validateInput(e.target);
    if (onChange) onChange(e);
  };

  const handleInvalid = (e: React.FormEvent<HTMLTextAreaElement>) => {
    validateInput(e.target as HTMLTextAreaElement);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' || onSubmit) {
      if (hasSubmitted) validateInput(event.currentTarget as HTMLTextAreaElement); // Validate input when Enter is pressed
      onSubmit && onSubmit();
    }
  };

  const validateInput = (input: HTMLTextAreaElement) => {
    if (input.validity.valid) {
      setError(null);
    } else {
      setError(getErrorBasedOnValidity(input, errorMessage));
    }
  };

  const classes = [styles.textArea, error ? styles.textAreaError : '', resizable ? styles.resizable : '', styles[`textArea--${variant}`]];

  return (
    <div className={combineClassNames([styles.wrapper, styles[`size${size}`]])}>
      {label && (
        <div>
          <Typography.Text variant={'div'} className={styles.label}>
            {others.required && <span style={{ color: 'var(--color-red-9)', marginRight: '4px' }}>*</span>}
            {label}
          </Typography.Text>
        </div>
      )}
      <textarea
        {...others}
        rows={size}
        data-has-value={hasSubmitted}
        onChange={handleInput}
        onInvalid={handleInvalid}
        onKeyPress={handleKeyPress} // Add the handleKeyPress method here
        className={combineClassNames(classes)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextArea;
