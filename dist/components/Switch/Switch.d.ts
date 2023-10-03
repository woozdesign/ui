import { FC, HTMLProps, ChangeEvent } from 'react';
import { ColorProp, RadiusProp, SizeProp } from '../../utils';
interface SwitchProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, ColorProp, SizeProp, RadiusProp {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const Switch: FC<SwitchProps>;
export default Switch;
