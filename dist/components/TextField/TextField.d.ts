import React, { ChangeEvent, FC } from 'react';
import { FormChildProps } from '../Form/Form';
export interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'>, FormChildProps {
    size?: 'large' | 'medium' | 'small';
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
