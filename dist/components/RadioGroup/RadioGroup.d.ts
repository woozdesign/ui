import React from 'react';
interface RadioOption {
    value: string;
    label: string;
}
interface RadioGroupProps {
    name: string;
    options: RadioOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
