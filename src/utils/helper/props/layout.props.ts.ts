import { Responsive, withBreakpoints } from '../responsive';
import { SpaceValue } from './space.props';

export interface LayoutProp {
  position?: Responsive<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>;
  width?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
  maxWidth?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
  minWidth?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
  height?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
  maxHeight?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
  minHeight?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
  top?: Responsive<'0' | 'auto' | '50%' | '100%'>;
  bottom?: Responsive<'0' | 'auto' | '50%' | '100%'>;
  left?: Responsive<'0' | 'auto' | '50%' | '100%'>;
  right?: Responsive<'0' | 'auto' | '50%' | '100%'>;
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
