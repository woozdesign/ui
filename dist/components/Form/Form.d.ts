import React, { FC, FormEvent } from 'react';
export interface FormChildProps {
    hasSubmitted?: boolean;
}
export interface FormProps {
    children: React.ReactElement<FormChildProps> | React.ReactElement<FormChildProps>[];
    onSuccess: (e: FormEvent<HTMLFormElement>) => void;
    onError: () => void;
}
declare const Form: FC<FormProps>;
export default Form;
