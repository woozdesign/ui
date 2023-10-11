import { ChangeEvent, FC, HTMLProps } from 'react';
import { FormChildProps } from '../Form/Form';
import { ColorProp, RadiusProp } from '../../utils';
interface TextAreaProps extends FormChildProps, Omit<HTMLProps<HTMLTextAreaElement>, 'size' | 'color'>, RadiusProp, ColorProp {
    variant?: 'solid' | 'ghost';
    size?: 1 | 2 | 3 | 4 | 5;
    label?: string;
    resizable?: boolean;
    errorMessage?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: () => void;
}
declare const TextArea: FC<TextAreaProps>;
export default TextArea;
