import React from 'react';
import styles from './RadioGroup.module.scss';
import { RadioGroupProps } from './RadioGroup.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { others: marginOtherProps, ...marginProps } = extractMarginProps(props);
  const { className, style, id, options, defaultValue, onChange, variant = 'solid', color, radius, highContrast, size = 'medium' } = marginOtherProps;

  const classes = classNames(styles.radioGroup, className, withBreakpoints(size, 'wd-radioGroup', styles), withMarginProps(marginProps));

  const radioClasses = classNames(
    styles.customRadio,
    styles[`customRadio--${variant}`],
    { [styles['highContrast']]: highContrast },
    withBreakpoints(size, 'wd-radioGroup', styles),
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={classes} data-accent-color={color} data-radius={radius}>
      {options.map((option, index) => (
        <label key={index} className={styles.radioLabel}>
          <input className={styles.hidden} type="radio" name={id} value={option.value} defaultChecked={defaultValue === option.value} onChange={handleOnChange} />
          <span className={radioClasses}></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
