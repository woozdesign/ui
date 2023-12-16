import { Responsive, withBreakpoints } from '../responsive';
import { SpaceValue } from './space.props';

export interface LayoutProp {
  position?: Responsive<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>;
  width?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vw' | '100vw'>;
  maxWidth?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vw' | '100vw'>;
  minWidth?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vw' | '100vw'>;
  height?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vh' | '100vh'>;
  maxHeight?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vh' | '100vh'>;
  minHeight?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vh' | '100vh'>;
  inset?: Responsive<'0' | 'auto' | '50%' | '100%'>;
  top?: Responsive<'0' | 'auto' | '50%' | '100%' | SpaceValue>;
  bottom?: Responsive<'0' | 'auto' | '50%' | '100%' | SpaceValue>;
  left?: Responsive<'0' | 'auto' | '50%' | '100%' | SpaceValue>;
  right?: Responsive<'0' | 'auto' | '50%' | '100%' | SpaceValue>;
  shrink?: Responsive<'0' | '1'>;
  grow?: Responsive<'0' | '1'>;
}

export const extractLayoutProps = <T extends LayoutProp>(props: T) => {
  const { position, width, maxWidth, minWidth, height, maxHeight, minHeight, top, bottom, left, right, shrink, grow, ...others } = props;
  return {
    position,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    top,
    bottom,
    left,
    right,
    shrink,
    grow,
    others,
  };
};

export const withLayoutProps = (props: LayoutProp) => {
  return [
    withBreakpoints(props.position, 'wd-position'),
    withBreakpoints(props.width, 'wd-w'),
    withBreakpoints(props.maxWidth, 'wd-maxw'),
    withBreakpoints(props.minWidth, 'wd-minw'),
    withBreakpoints(props.height, 'wd-h'),
    withBreakpoints(props.maxHeight, 'wd-maxh'),
    withBreakpoints(props.minHeight, 'wd-minh'),
    withBreakpoints(props.inset, 'wd-inset'),
    withBreakpoints(props.top, 'wd-top'),
    withBreakpoints(props.bottom, 'wd-bottom'),
    withBreakpoints(props.left, 'wd-left'),
    withBreakpoints(props.right, 'wd-right'),
    withBreakpoints(props.shrink, 'wd-fs'),
    withBreakpoints(props.grow, 'wd-fg'),
  ]
    .filter(Boolean)
    .join(' ');
};
