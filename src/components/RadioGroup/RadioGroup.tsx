import React, { useEffect, useState } from 'react';
import styles from './RadioGroup.module.scss';
import { RadioGroupProps } from './RadioGroup.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { others: marginOtherProps, ...marginProps } = extractMarginProps(props);
  const { className, style, id, options, defaultValue, disabled, onChange, variant = 'solid', color, radius, highContrast, size = 'medium' } = marginOtherProps;

  const [isDisabled, setIsDisabled] = useState(disabled || false);

  const classes = classNames(styles.radioGroup, className, { [styles['disabled']]: isDisabled }, withBreakpoints(size, 'wd-radioGroup', styles), withMarginProps(marginProps));
  const radioClasses = classNames(
    styles.customRadio,
    styles[`customRadio--${variant}`],
    { [styles['highContrast']]: highContrast },
    withBreakpoints(size, 'wd-radioGroup', styles),
  );

  const labelClasses = classNames(styles.radioLabel, { [styles['disabled']]: isDisabled });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={classes} data-accent-color={color} data-radius={radius} style={style}>
      {options.map((option, index) => (
        <label key={index} className={labelClasses}>
          <input
            disabled={disabled}
            className={styles.hidden}
            type="radio"
            name={id}
            value={option.value}
            defaultChecked={defaultValue === option.value}
            onChange={handleOnChange}
          />
          <span className={radioClasses}></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
