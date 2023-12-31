import { BaseProp, BasePropWithChildren } from '@/utils';

export interface DrawerProps extends BasePropWithChildren {
  open?: boolean;
  width?: React.CSSProperties['width'];
  placement?: 'left' | 'right';
  variant?: 'default' | 'confirm';
  outlined?: boolean;
  overlayVariant?: 'transparent' | 'translucent';
  onClose?: () => void;
}

export interface ContentProps extends BasePropWithChildren {}

export interface HeaderProps extends BaseProp {
  title?: React.ReactNode;
  action?: React.ReactNode;
}
export interface FooterProps extends BasePropWithChildren {}
