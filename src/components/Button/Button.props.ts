import { ColorProp, SizeProp } from '../../utils';

export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export interface ButtonProps extends ColorProp, SizeProp {
  variant?: 'primary' | 'outlined' | 'secondary' | 'text' | 'icon';
  buttonType?: 'button' | 'reset' | 'submit';
  block?: boolean;
  disabled?: boolean;
  highContrast?: boolean;
  shape?: 'round' | 'rect';
  iconPrepend?: JSX.Element;
  iconAppend?: JSX.Element;
  children?: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: ButtonClickHandler | AnchorClickHandler;
}
