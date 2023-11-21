// AutoComplete.tsx
'use client';
import React, { FC, useState, useEffect } from 'react';
import TextField from '../TextField';
import styles from './AutoComplete.module.scss'; // You'll create this SCSS module next
import { AutoCompleteProps } from './AutoComplete.props';

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { suggestions = [], ...textFieldProps } = props;
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
    <div data-radius={textFieldProps.radius} data-accent-color={textFieldProps.color} className={styles.autoCompleteContainer}>
      <TextField {...textFieldProps} value={inputValue} onChange={handleInputChange} />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul data-shadow={textFieldProps.shadow ?? '4'} className={styles.suggestionsList}>
          {filteredSuggestions.map((suggestion) => (
            <li className={styles.item} key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
