'use client';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInput';
import classNames from 'classnames';
import React, { ChangeEvent, FC, useState } from 'react';
import Typography from '../Typography/Typography';
import styles from './TextArea.module.scss';
import { TextAreaProps } from './TextArea.props';
import { extractMarginProps, withMarginProps } from '@/utils';

const TextArea: FC<TextAreaProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const {
    className,
    style,
    children,
    variant = 'outlined',
    size = 2,
    label,
    color,
    radius,
    resizable = false,
    errorMessage,
    hasSubmitted = false,
    onChange,
    onSubmit,
    placeholder,
    shadow,
    ...others
  } = otherMarginProps;

  const [error, setError] = useState<string | null>(null);

  const wrapperClasses = classNames(styles.wrapper, withMarginProps(marginProps));
  const classes = classNames(styles.textArea, className, styles[`textArea--${variant}`], { [styles.textAreaError]: error, [styles.resizable]: resizable });

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

  return (
    <div data-accent-color={color} data-radius={radius} className={wrapperClasses}>
      <textarea
        {...others}
        rows={size}
        placeholder={placeholder}
        data-has-value={hasSubmitted}
        data-shadow={shadow}
        onChange={handleInput}
        onInvalid={handleInvalid}
        onKeyPress={handleKeyPress} // Add the handleKeyPress method here
        className={classes}
        style={style}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextArea;
