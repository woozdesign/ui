import { ColorProp, SizeProp, RadiusProp, MarginProp, HighContrastProp } from '@/utils';
import { FormChildProps } from '../Form/Form.props';

export interface CheckboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'label' | 'type' | 'color' | 'size' | 'onChange'>,
    MarginProp,
    ColorProp,
    SizeProp,
    RadiusProp,
    HighContrastProp,
    FormChildProps {
  onChange?: () => void;
  label?: React.ReactNode;
}
