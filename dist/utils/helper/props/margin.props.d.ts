export type MarginValue = '-1' | '-2' | '-3' | '-4' | '-5' | '-6' | '-7' | '-8' | '-9' | '-10' | '-11' | '-12' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export interface MarginProp {
    m?: MarginValue;
    mx?: MarginValue;
    my?: MarginValue;
    ml?: MarginValue;
    mr?: MarginValue;
    mt?: MarginValue;
    mb?: MarginValue;
}
export declare const extractMarginProps: <T extends MarginProp>(props: T) => {
    m: MarginValue | undefined;
    mx: MarginValue | undefined;
    my: MarginValue | undefined;
    ml: MarginValue | undefined;
    mr: MarginValue | undefined;
    mt: MarginValue | undefined;
    mb: MarginValue | undefined;
    others: Omit<T, "m" | "mx" | "my" | "ml" | "mr" | "mt" | "mb">;
};
export declare const withMarginProps: (props: MarginProp) => string;
