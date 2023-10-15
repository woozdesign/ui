export interface AppBarProps {
  variant?: 'solid' | 'transparent' | 'translucent';
  position?: 'block' | 'absolute' | 'fixed';
  children: React.ReactNode;
}

export interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface BodyProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export interface ActionProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  mobile?: boolean;
}