import { ColorProp, RadiusProp, SizeProp } from '@/utils';
import { FormChildProps } from '../Form/Form.props';

export interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'color'>, FormChildProps, RadiusProp, SizeProp, ColorProp {
  variant?: 'solid' | 'ghost';
  label?: string;
  iconPrepend?: React.ReactNode;
  iconAppend?: React.ReactNode;
  block?: boolean;
  pattern?: string;
  errorMessage?: string; // Custom error message prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}
