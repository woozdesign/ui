export type PaddingValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export interface PaddingProp {
    p?: PaddingValue;
    px?: PaddingValue;
    py?: PaddingValue;
    pl?: PaddingValue;
    pr?: PaddingValue;
    pt?: PaddingValue;
    pb?: PaddingValue;
}
export declare const extractPaddingProps: <T extends PaddingProp>(props: T) => {
    p: PaddingValue | undefined;
    px: PaddingValue | undefined;
    py: PaddingValue | undefined;
    pl: PaddingValue | undefined;
    pr: PaddingValue | undefined;
    pt: PaddingValue | undefined;
    pb: PaddingValue | undefined;
    others: Omit<T, "p" | "px" | "py" | "pl" | "pr" | "pt" | "pb">;
};
export declare const withPaddingProps: (props: PaddingProp) => string;
