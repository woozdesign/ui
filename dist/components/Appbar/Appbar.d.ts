import { FC, ReactNode } from 'react';
interface AppBarProps {
    children: ReactNode;
}
declare const AppBar: FC<AppBarProps> & {
    Heading: FC<HeadingProps>;
    Body: FC<BodyProps>;
    Action: FC<ActionProps>;
};
interface HeadingProps {
    children: ReactNode;
}
interface BodyProps {
    children?: ReactNode;
}
interface ActionProps {
    children?: ReactNode;
}
export default AppBar;
