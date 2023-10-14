import { ColorProp, RadiusProp } from '@/utils';

export interface ScrollAreaProps extends RadiusProp, ColorProp {
  id: string; // Add this line
  type?: 'always' | 'auto';
  scrollbars?: 'vertical' | 'horizontal';
  persistent?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
