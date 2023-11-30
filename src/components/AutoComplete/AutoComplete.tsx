// AutoComplete.tsx
'use client';
import React, { FC, useState, useEffect, useRef, useCallback } from 'react';
import TextField from '../TextField';
import styles from './AutoComplete.module.scss'; // You'll create this SCSS module next
import { AutoCompleteProps } from './AutoComplete.props';
import classNames from 'classnames';
import { useOutsideClick, useTransitionState, withBreakpoints } from '@/utils';

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { suggestions = [], ...textFieldProps } = props;
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [isOpen, isRendered] = useTransitionState(showSuggestions, 200);
  const rootRef = useRef(null);

  const handleToggle = useCallback(() => {
    setShowSuggestions((prevIsOpen) => !prevIsOpen);
  }, []);

  useOutsideClick(rootRef, () => setShowSuggestions(false));

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
    textFieldProps.onChange && textFieldProps.onChange(e);
    setInputValue(e.target.value);

    if (e.target.value.length == 0) {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    // Trigger any other action on suggestion click
  };

  return (
    <div ref={rootRef} className={classes} data-radius={textFieldProps.radius} data-accent-color={textFieldProps.color}>
      <TextField {...textFieldProps} className={styles.textField} value={inputValue} onChange={handleInputChange}>
        {isRendered && filteredSuggestions.length > 0 && (
          <ul data-shadow={textFieldProps.shadow ?? '4'} className={classNames(styles.suggestionsList, { [styles[`open`]]: isOpen })}>
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
