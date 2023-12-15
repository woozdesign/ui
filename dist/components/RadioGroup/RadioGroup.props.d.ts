import { BaseProp, BorderWidthProp, ColorProp, HighContrastProp, MarginProp, RadiusProp, SizeProp } from '../../utils';
export interface RadioOption {
    value: string;
    label?: string;
}
export interface RadioGroupProps extends BaseProp, MarginProp, ColorProp, SizeProp, RadiusProp, BorderWidthProp, HighContrastProp {
    variant?: 'solid' | 'ghost' | 'outlined';
    id: string;
    options: RadioOption[];
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
