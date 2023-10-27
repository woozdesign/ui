import { BaseProp, ColorProp, HighContrastProp, MarginProp, RadiusProp, SizeProp } from '../../utils';
export interface RadioOption {
    value: string;
    label?: string;
}
export interface RadioGroupProps extends BaseProp, MarginProp, ColorProp, SizeProp, RadiusProp, HighContrastProp {
    variant?: 'solid' | 'ghost' | 'outlined';
    name?: string;
    options: RadioOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}
