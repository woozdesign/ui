// AutoComplete.tsx
'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import TextField from '../TextField';
import styles from './AutoComplete.module.scss'; // You'll create this SCSS module next
import { AutoCompleteProps } from './AutoComplete.props';
import classNames from 'classnames';
import { withBreakpoints } from '@/utils';

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { suggestions = [], ...textFieldProps } = props;
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const itemClasses = classNames(styles.item);
  const classes = classNames(styles.autoCompleteContainer, withBreakpoints(textFieldProps.size ?? 'medium', 'wd-autocomplete', styles));

  useEffect(() => {
    if (!suggestions) return;
    if (inputValue) {
      const filtered = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(inputValue.toLowerCase()));
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [inputValue, suggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    textFieldProps.onChange && textFieldProps.onChange(e);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    // Trigger any other action on suggestion click
  };

  return (
    <div className={classes} data-radius={textFieldProps.radius} data-accent-color={textFieldProps.color}>
      <TextField {...textFieldProps} className={styles.textField} value={inputValue} onChange={handleInputChange}>
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul data-shadow={textFieldProps.shadow ?? '4'} className={styles.suggestionsList}>
            {filteredSuggestions.map((suggestion) => (
              <li className={itemClasses} key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </TextField>
    </div>
  );
};

export default AutoComplete;
