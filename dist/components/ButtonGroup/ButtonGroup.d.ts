import { FC, ReactNode } from 'react';
export interface ButtonGroupProps {
    children: ReactNode;
    spacing?: 'small' | 'medium' | 'large';
}
declare const ButtonGroup: FC<ButtonGroupProps>;
export default ButtonGroup;
