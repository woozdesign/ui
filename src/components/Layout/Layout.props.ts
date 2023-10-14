export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  // className?: string;
  children: React.ReactNode;
  // style?: React.CSSProperties;
}
export interface RowProps extends React.HTMLProps<HTMLDivElement> {
  gutter?: [number, number]; // [horizontal, vertical]
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
  children?: React.ReactNode;
}

export interface ColProps extends React.HTMLProps<HTMLDivElement> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children?: React.ReactNode;
}
