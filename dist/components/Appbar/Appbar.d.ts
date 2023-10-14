import { FC } from 'react';
import { ActionProps, AppBarProps, BodyProps, HeaderProps } from './Appbar.props';
declare const AppBar: FC<AppBarProps> & {
    Header: FC<HeaderProps>;
    Body: FC<BodyProps>;
    Action: FC<ActionProps>;
};
export default AppBar;
