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

export interface TextSizeProp {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export interface SpaceSizeProp {
  space?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

export interface HighContrastProp {
  highContrast?: boolean;
}
