import { TextFieldProps } from '../TextField/TextField.props';
export type AutoCompleteProps = {
    suggestions: string[];
    onInputChange?: (input: string) => void;
} & TextFieldProps;
