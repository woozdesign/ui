'use client';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInput';
import classNames from 'classnames';
import React, { ChangeEvent, FC, useState } from 'react';
import Typography from '../Typography/Typography';
import styles from './TextArea.module.scss';
import { TextAreaProps } from './TextArea.props';

const TextArea: FC<TextAreaProps> = ({
  variant = 'solid',
  size = 2,
  label,
  color,
  radius,
  resizable = false,
  errorMessage,
  hasSubmitted = false,
  onChange,
  onSubmit,
  ...others
}) => {
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

  const classes = classNames(styles.textArea, styles[`textArea--${variant}`], { [styles.textAreaError]: error, [styles.resizable]: resizable });

  return (
    <div data-accent-color={color} data-radius={radius} className={classNames(styles.wrapper, styles[`size${size}`])}>
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
        className={classes}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextArea;
