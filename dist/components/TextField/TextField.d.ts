import React, { ChangeEvent, FC } from 'react';
import { FormChildProps } from '../Form/Form';
import { ColorProp, RadiusProp, SizeProp } from '../../utils';
export interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'color'>, FormChildProps, RadiusProp, SizeProp, ColorProp {
    variant?: 'solid' | 'ghost';
    label?: string;
    iconPrepend?: JSX.Element;
    iconAppend?: JSX.Element;
    block?: boolean;
    pattern?: string;
    errorMessage?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: () => void;
}
declare const TextField: FC<TextFieldProps>;
export default TextField;
