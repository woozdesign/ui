import { ColorProp, RadiusProp, SizeProp } from '../../utils';
import { ChangeEvent, FC, HTMLProps } from 'react';
import { FormChildProps } from '../Form/Form';
interface SwitchProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, ColorProp, SizeProp, RadiusProp, FormChildProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const Switch: FC<SwitchProps>;
export default Switch;
