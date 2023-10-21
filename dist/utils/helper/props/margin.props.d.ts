export type MarginType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export interface MarginProp {
    m?: MarginType;
    mx?: MarginType;
    my?: MarginType;
    ml?: MarginType;
    mr?: MarginType;
    mt?: MarginType;
    mb?: MarginType;
}
export declare const extractMarginProps: <T extends MarginProp>(props: T) => {
    m: MarginType | undefined;
    mx: MarginType | undefined;
    my: MarginType | undefined;
    ml: MarginType | undefined;
    mr: MarginType | undefined;
    mt: MarginType | undefined;
    mb: MarginType | undefined;
    others: Omit<T, "m" | "mx" | "my" | "ml" | "mr" | "mt" | "mb">;
};
export declare const withMarginProps: (props: MarginProp) => string;
