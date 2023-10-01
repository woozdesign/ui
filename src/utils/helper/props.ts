import { ThemeAccentColor, ThemeRadius } from '@/components/Theme/ThemeOptions';

export interface ColorProp {
  color?: ThemeAccentColor;
}

export interface SizeProp {
  size?: 'xlarge' | 'large' | 'medium' | 'small';
}

export interface RadiusProp {
  radius?: ThemeRadius;
}
