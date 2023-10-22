import { Responsive } from '../responsive';
export type MarginValue = '-1' | '-2' | '-3' | '-4' | '-5' | '-6' | '-7' | '-8' | '-9' | '-10' | '-11' | '-12' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export interface MarginProp {
    m?: Responsive<MarginValue>;
    mx?: Responsive<MarginValue>;
    my?: Responsive<MarginValue>;
    ml?: Responsive<MarginValue>;
    mr?: Responsive<MarginValue>;
    mt?: Responsive<MarginValue>;
    mb?: Responsive<MarginValue>;
}
export declare const extractMarginProps: <T extends MarginProp>(props: T) => {
    m: Responsive<MarginValue> | undefined;
    mx: Responsive<MarginValue> | undefined;
    my: Responsive<MarginValue> | undefined;
    ml: Responsive<MarginValue> | undefined;
    mr: Responsive<MarginValue> | undefined;
    mt: Responsive<MarginValue> | undefined;
    mb: Responsive<MarginValue> | undefined;
    others: Omit<T, "m" | "mx" | "my" | "ml" | "mr" | "mt" | "mb">;
};
export declare const withMarginProps: (props: MarginProp) => string;
