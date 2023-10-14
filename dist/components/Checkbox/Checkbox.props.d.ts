/// <reference types="react" />
import { ColorProp, SizeProp, RadiusProp } from '../../utils';
import { FormChildProps } from '../Form/Form.props';
export interface CheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, ColorProp, SizeProp, RadiusProp, FormChildProps {
    onChange?: () => void;
    label?: string;
}
