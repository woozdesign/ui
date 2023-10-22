import { Responsive, withBreakpoints } from '../responsive';

export type PaddingValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface PaddingProp {
  p?: Responsive<PaddingValue>;
  px?: Responsive<PaddingValue>;
  py?: Responsive<PaddingValue>;
  pl?: Responsive<PaddingValue>;
  pr?: Responsive<PaddingValue>;
  pt?: Responsive<PaddingValue>;
  pb?: Responsive<PaddingValue>;
}

export const extractPaddingProps = <T extends PaddingProp>(props: T) => {
  const { p, px, py, pl, pr, pt, pb, ...others } = props;
  return {
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    others,
  };
};

export const withPaddingProps = (props: PaddingProp) => {
  return [
    withBreakpoints(props.p, 'wd-p'),
    withBreakpoints(props.pb, 'wd-pb'),
    withBreakpoints(props.pl, 'wd-pl'),
    withBreakpoints(props.pr, 'wd-pr'),
    withBreakpoints(props.pt, 'wd-pt'),
    withBreakpoints(props.px, 'wd-px'),
    withBreakpoints(props.py, 'wd-py'),
  ]
    .filter(Boolean)
    .join(' ');
};
