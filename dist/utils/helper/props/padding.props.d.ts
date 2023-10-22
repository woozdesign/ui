import { Responsive } from '../responsive';
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
export declare const extractPaddingProps: <T extends PaddingProp>(props: T) => {
    p: Responsive<PaddingValue> | undefined;
    px: Responsive<PaddingValue> | undefined;
    py: Responsive<PaddingValue> | undefined;
    pl: Responsive<PaddingValue> | undefined;
    pr: Responsive<PaddingValue> | undefined;
    pt: Responsive<PaddingValue> | undefined;
    pb: Responsive<PaddingValue> | undefined;
    others: Omit<T, "p" | "px" | "py" | "pl" | "pr" | "pt" | "pb">;
};
export declare const withPaddingProps: (props: PaddingProp) => string;
