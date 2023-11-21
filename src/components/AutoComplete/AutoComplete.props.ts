import { TextFieldProps } from '../TextField/TextField.props';

export type AutoCompleteProps = {
  suggestions: string[];
  onInputChange?: (input: string) => void;
  // Add other props as needed
} & TextFieldProps;
