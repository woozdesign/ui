import { SpaceProp } from './space.props';
export interface LayoutProp {
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    width?: SpaceProp | 'auto' | '100%' | 'min-content' | 'max-content';
    height?: SpaceProp | 'auto' | '100%' | 'min-content' | 'max-content';
    top?: '0' | 'auto' | '50%' | '100%';
    bottom?: '0' | 'auto' | '50%' | '100%';
    left?: '0' | 'auto' | '50%' | '100%';
    right?: '0' | 'auto' | '50%' | '100%';
    shrink?: '0' | '1';
    grow?: '0' | 1;
}
export declare const extractLayoutProps: <T extends LayoutProp>(props: T) => {
    position: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    width: "auto" | "max-content" | "min-content" | SpaceProp | "100%" | undefined;
    height: "auto" | "max-content" | "min-content" | SpaceProp | "100%" | undefined;
    top: "0" | "auto" | "100%" | "50%" | undefined;
    bottom: "0" | "auto" | "100%" | "50%" | undefined;
    left: "0" | "auto" | "100%" | "50%" | undefined;
    right: "0" | "auto" | "100%" | "50%" | undefined;
    shrink: "0" | "1" | undefined;
    grow: 1 | "0" | undefined;
    others: Omit<T, "left" | "right" | "top" | "bottom" | "height" | "width" | "position" | "shrink" | "grow">;
};
export declare const withLayoutProps: (props: LayoutProp) => void;
