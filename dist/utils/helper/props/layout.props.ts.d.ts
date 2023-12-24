import { Responsive } from '../responsive';
import { SpaceValue } from './space.props';
export interface LayoutProp {
    position?: Responsive<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>;
    width?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vw' | '100vw'>;
    maxWidth?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vw' | '100vw'>;
    minWidth?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vw' | '100vw'>;
    height?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vh' | '100vh'>;
    maxHeight?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vh' | '100vh'>;
    minHeight?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content' | '50vh' | '100vh'>;
    inset?: Responsive<'0' | 'auto' | '50%' | '100%'>;
    top?: Responsive<'0' | 'auto' | '50%' | '100%' | SpaceValue>;
    bottom?: Responsive<'0' | 'auto' | '50%' | '100%' | SpaceValue>;
    left?: Responsive<'0' | 'auto' | '50%' | '100%' | SpaceValue>;
    right?: Responsive<'0' | 'auto' | '50%' | '100%' | SpaceValue>;
    shrink?: Responsive<'0' | '1'>;
    grow?: Responsive<'0' | '1'>;
}
export declare const extractLayoutProps: <T extends LayoutProp>(props: T) => {
    position: Responsive<"fixed" | "absolute" | "static" | "relative" | "sticky"> | undefined;
    width: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%" | "50vw" | "100vw"> | undefined;
    maxWidth: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%" | "50vw" | "100vw"> | undefined;
    minWidth: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%" | "50vw" | "100vw"> | undefined;
    height: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%" | "50vh" | "100vh"> | undefined;
    maxHeight: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%" | "50vh" | "100vh"> | undefined;
    minHeight: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%" | "50vh" | "100vh"> | undefined;
    top: Responsive<"auto" | SpaceValue | "100%" | "50%"> | undefined;
    bottom: Responsive<"auto" | SpaceValue | "100%" | "50%"> | undefined;
    left: Responsive<"auto" | SpaceValue | "100%" | "50%"> | undefined;
    right: Responsive<"auto" | SpaceValue | "100%" | "50%"> | undefined;
    shrink: Responsive<"0" | "1"> | undefined;
    grow: Responsive<"0" | "1"> | undefined;
    others: Omit<T, "top" | "height" | "left" | "right" | "bottom" | "width" | "position" | "maxWidth" | "minWidth" | "maxHeight" | "minHeight" | "shrink" | "grow">;
};
export declare const withLayoutProps: (props: LayoutProp) => string;
