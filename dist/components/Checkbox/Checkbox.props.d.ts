/// <reference types="react" />
import { ColorProp, SizeProp, RadiusProp, MarginProp } from '../../utils';
import { FormChildProps } from '../Form/Form.props';
export interface CheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, MarginProp, ColorProp, SizeProp, RadiusProp, FormChildProps {
    onChange?: () => void;
    label?: string;
}
