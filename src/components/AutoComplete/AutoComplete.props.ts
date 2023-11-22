import { TextFieldProps } from '../TextField/TextField.props';

export type AutoCompleteProps = {
  suggestions: string[];
  // Add other props as needed
} & TextFieldProps;
