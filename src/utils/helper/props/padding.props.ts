import { withBreakpoints } from '../responsive';

export type PaddingType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface PaddingProp {
  p?: PaddingType;
  px?: PaddingType;
  py?: PaddingType;
  pl?: PaddingType;
  pr?: PaddingType;
  pt?: PaddingType;
  pb?: PaddingType;
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
