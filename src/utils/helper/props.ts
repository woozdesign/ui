import { Theme } from '@/components';
import { ThemeOptions } from '@/components/Theme/ThemeOptions';

interface ColorProp {
  color?: ThemeOptions['accentColor'];
}

interface SizeProp {
  size?: 'xlarge' | 'large' | 'medium' | 'small';
}

export { ColorProp, SizeProp };
