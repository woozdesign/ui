import React from 'react';
import styles from './RadioGroup.module.scss';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, defaultValue, onChange }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.radioGroup}>
      {options.map((option, index) => (
        <label key={index} className={styles.radioLabel}>
          <input type="radio" name={name} value={option.value} defaultChecked={defaultValue === option.value} onChange={handleOnChange} />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
