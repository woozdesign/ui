// AutoComplete.tsx
'use client';
import React, { FC, useState, useEffect } from 'react';
import TextField from '../TextField';
import styles from './AutoComplete.module.scss'; // You'll create this SCSS module next

export interface AutoCompleteProps {
  suggestions: string[];
  onInputChange?: (input: string) => void;
  // Add other props as needed
}

const AutoComplete: FC<AutoCompleteProps> = ({ suggestions = [], onInputChange, ...props }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (inputValue) {
      const filtered = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(inputValue.toLowerCase()));
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [inputValue, suggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onInputChange && onInputChange(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    // Trigger any other action on suggestion click
  };

  return (
    <div className={styles.autoCompleteContainer}>
      <TextField
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        // Add other TextField props as needed
      />
      {showSuggestions && (
        <ul className={styles.suggestionsList}>
          {filteredSuggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
