'use client';
import { getErrorBasedOnValidity } from '@/utils/helper/validateInput';
import classNames from 'classnames';
import React, { ChangeEvent, FC, useState } from 'react';
import Typography from '../Typography/Typography';
import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';

const TextField: FC<TextFieldProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const {
    className,
    style,
    children,
    variant = 'outlined',
    size = 'medium',
    placeholder = '',
    iconPrepend,
    iconAppend,
    block,
    errorMessage,
    onChange,
    onSubmit,
    color,
    radius,
    hasSubmitted = false,
    shadow,
    borderWidth,
    ...others
  } = otherMarginProps;

  const wrapperClasses = classNames(styles.wrapper, { [styles.block]: block }, withBreakpoints(size, 'wtd-textfield--wrapper', styles), withMarginProps(marginProps), className);
  const groupClasses = classNames(styles.group, { [styles.block]: block }, withBreakpoints(size, 'wd-textfield--group', styles));
  const inputClasses = classNames(styles.input, iconPrepend && styles.hasPrependIcon);

  const [error, setError] = useState<string | null>(null);
  const errorClasses = classNames(inputClasses, error && styles.inputError, styles[`input--${variant}`]);

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
    <div data-accent-color={color} data-radius={radius} data-border-width={borderWidth} className={wrapperClasses} style={style}>
      <div className={groupClasses}>
        {iconPrepend && <span className={styles.iconPrepend}>{iconPrepend}</span>}
        <input
          {...others}
          placeholder={placeholder}
          data-has-value={hasSubmitted}
          data-shadow={shadow}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          onInvalid={handleInvalid}
          className={errorClasses}
        />
        {iconAppend && <span className={styles.iconAppend}>{iconAppend}</span>}

        {children}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextField;
