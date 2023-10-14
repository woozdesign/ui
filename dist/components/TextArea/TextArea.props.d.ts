import { ColorProp, RadiusProp } from '../../utils';
import React from 'react';
import { FormChildProps } from '../Form/Form.props';
export interface TextAreaProps extends FormChildProps, Omit<React.HTMLProps<HTMLTextAreaElement>, 'size' | 'color'>, RadiusProp, ColorProp {
    variant?: 'solid' | 'ghost';
    size?: 1 | 2 | 3 | 4 | 5;
    label?: string;
    resizable?: boolean;
    errorMessage?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: () => void;
}
