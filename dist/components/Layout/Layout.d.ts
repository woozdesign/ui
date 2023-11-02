import { FC } from 'react';
import { LayoutComponentProps } from './Layout.props';
declare const Layout: FC<LayoutComponentProps> & {
    Header: FC<LayoutComponentProps>;
    Sider: FC<LayoutComponentProps>;
    Content: FC<LayoutComponentProps>;
    Footer: FC<LayoutComponentProps>;
};
export default Layout;
