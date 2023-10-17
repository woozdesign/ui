export interface DrawerProps {
  children: React.ReactNode;
  open?: boolean;
  width?: React.CSSProperties['width'];
  placement?: 'left' | 'right';
  variant?: 'default' | 'confirm';
  outlined?: boolean;
  overlayVariant?: 'transparent' | 'translucent';
  onClose?: () => void;
}

export interface ContentProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  title?: React.ReactNode;
  action?: React.ReactNode;
}
export interface FooterProps {
  children: React.ReactNode;
}
