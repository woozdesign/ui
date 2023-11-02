import { FC } from 'react';
import { LayoutProps } from './Layout.props';
declare const Layout: FC<LayoutProps> & {
    Header: FC<LayoutProps>;
    Sider: FC<LayoutProps>;
    Content: FC<LayoutProps>;
    Footer: FC<LayoutProps>;
};
export default Layout;
