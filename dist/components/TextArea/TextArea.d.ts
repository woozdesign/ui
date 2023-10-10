import { FC, HTMLProps, ChangeEvent } from 'react';
import { FormChildProps } from '../Form/Form';
interface TextAreaProps extends FormChildProps, Omit<HTMLProps<HTMLTextAreaElement>, 'size'> {
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
