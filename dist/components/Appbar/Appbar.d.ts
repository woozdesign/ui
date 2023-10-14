import { FC } from 'react';
import { ActionProps, AppBarProps, BodyProps, HeadingProps } from './Appbar.props';
declare const AppBar: FC<AppBarProps> & {
    Heading: FC<HeadingProps>;
    Body: FC<BodyProps>;
    Action: FC<ActionProps>;
};
export default AppBar;
