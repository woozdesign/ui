import { SpaceSizeProp } from '@/utils';

export interface FlexProps extends SpaceSizeProp {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  direction?: 'row' | 'column';
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
