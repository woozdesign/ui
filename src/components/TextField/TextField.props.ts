import { BorderWidthProp, ColorProp, MarginProp, RadiusProp, ShadowProp, SizeProp } from '@/utils';
import { FormChildProps } from '../Form/Form.props';

export interface TextFieldProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'color'>,
    MarginProp,
    FormChildProps,
    RadiusProp,
    SizeProp,
    ColorProp,
    ShadowProp,
    BorderWidthProp {
  variant?: 'solid' | 'ghost' | 'outlined';
  iconPrepend?: React.ReactNode;
  iconAppend?: React.ReactNode;
  block?: boolean;
  pattern?: string;
  errorMessage?: string; // Custom error message prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}
