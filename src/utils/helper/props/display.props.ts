import { withBreakpoints } from '../responsive';

export type DisplayValue = 'none' | 'block' | 'flex' | 'grid' | 'inline' | 'inline-flex' | 'inline-block' | 'inline-grid';

export interface DisplayProp {
  display?: DisplayValue;
}

export const extractDisplayProps = <T extends DisplayProp>(props: T) => {
  const { display, ...others } = props;
  return { display, others };
};

export const withDisplayProps = (props: DisplayProp) => {
  return [withBreakpoints(props.display, 'wd-display')].filter(Boolean).join(' ');
};
