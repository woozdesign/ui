import { FC, HTMLProps } from 'react';
import { ColorProp, RadiusProp, SizeProp } from '../../utils';
import { FormChildProps } from '../Form/Form';
interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, ColorProp, SizeProp, RadiusProp, FormChildProps {
    onChange?: () => void;
    label?: string;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
