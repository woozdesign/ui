export interface BaseProp {
  className?: string;
  style?: React.CSSProperties;
}

export interface BasePropWithChildren extends BaseProp {
  children?: React.ReactNode;
}
