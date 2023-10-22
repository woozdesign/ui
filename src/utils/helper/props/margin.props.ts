import { Responsive, withBreakpoints } from '../responsive';

export type MarginValue =
  | '-1'
  | '-2'
  | '-3'
  | '-4'
  | '-5'
  | '-6'
  | '-7'
  | '-8'
  | '-9'
  | '-10'
  | '-11'
  | '-12'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export interface MarginProp {
  m?: Responsive<MarginValue>;
  mx?: Responsive<MarginValue>;
  my?: Responsive<MarginValue>;
  ml?: Responsive<MarginValue>;
  mr?: Responsive<MarginValue>;
  mt?: Responsive<MarginValue>;
  mb?: Responsive<MarginValue>;
}

export const extractMarginProps = <T extends MarginProp>(props: T) => {
  const { m, mx, my, ml, mr, mt, mb, ...others } = props;
  return {
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    others,
  };
};
export const withMarginProps = (props: MarginProp) => {
  return [
    withBreakpoints(props.m, 'wd-m'),
    withBreakpoints(props.mb, 'wd-mb'),
    withBreakpoints(props.ml, 'wd-ml'),
    withBreakpoints(props.mr, 'wd-mr'),
    withBreakpoints(props.mt, 'wd-mt'),
    withBreakpoints(props.mx, 'wd-mx'),
    withBreakpoints(props.my, 'wd-my'),
  ]
    .filter(Boolean)
    .join(' ');
};
