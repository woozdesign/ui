import { FC } from 'react';
export interface AutoCompleteProps {
    suggestions: string[];
    onInputChange?: (input: string) => void;
}
declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
