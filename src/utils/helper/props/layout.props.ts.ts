import { SpaceProp } from './space.props';

export interface LayoutProp {
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  width?: SpaceProp | 'auto' | '100%' | 'min-content' | 'max-content';
  height?: SpaceProp | 'auto' | '100%' | 'min-content' | 'max-content';
  top?: '0' | 'auto' | '50%' | '100%';
  bottom?: '0' | 'auto' | '50%' | '100%';
  left?: '0' | 'auto' | '50%' | '100%';
  right?: '0' | 'auto' | '50%' | '100%';
  shrink?: '0' | '1';
  grow?: '0' | 1;
}

export const extractLayoutProps = <T extends LayoutProp>(props: T) => {
  const { position, width, height, top, bottom, left, right, shrink, grow, ...others } = props;
  return {
    position,
    width,
    height,
    top,
    bottom,
    left,
    right,
    shrink,
    grow,
    others,
  };
};

export const withLayoutProps = (props: LayoutProp) => {};
