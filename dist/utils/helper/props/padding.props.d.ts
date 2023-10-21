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
export declare const extractPaddingProps: <T extends PaddingProp>(props: T) => {
    p: PaddingType | undefined;
    px: PaddingType | undefined;
    py: PaddingType | undefined;
    pl: PaddingType | undefined;
    pr: PaddingType | undefined;
    pt: PaddingType | undefined;
    pb: PaddingType | undefined;
    others: Omit<T, "p" | "px" | "py" | "pl" | "pr" | "pt" | "pb">;
};
export declare const withPaddingProps: (props: PaddingProp) => string;
