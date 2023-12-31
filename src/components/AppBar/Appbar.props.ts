import { BasePropWithChildren, BorderWidthProp, ShadowProp } from '@/utils';

export interface AppBarProps extends BasePropWithChildren, BorderWidthProp, ShadowProp {
  variant?: 'solid' | 'transparent' | 'translucent';
  position?: 'block' | 'absolute' | 'fixed';
}

export interface HeaderProps extends BasePropWithChildren {}

export interface BodyProps extends BasePropWithChildren {}
export interface ActionProps extends BasePropWithChildren {
  mobile?: boolean;
}
