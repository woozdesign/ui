import { Responsive } from '../responsive';
import { SpaceValue } from './space.props';
export interface LayoutProp {
    position?: Responsive<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>;
    width?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
    maxWidth?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
    minWidth?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
    height?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
    maxHeight?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
    minHeight?: Responsive<SpaceValue | 'auto' | '100%' | 'min-content' | 'max-content'>;
    inset?: Responsive<'0' | 'auto' | '50%' | '100%'>;
    top?: Responsive<'0' | 'auto' | '50%' | '100%'>;
    bottom?: Responsive<'0' | 'auto' | '50%' | '100%'>;
    left?: Responsive<'0' | 'auto' | '50%' | '100%'>;
    right?: Responsive<'0' | 'auto' | '50%' | '100%'>;
    shrink?: Responsive<'0' | '1'>;
    grow?: Responsive<'0' | '1'>;
}
export declare const extractLayoutProps: <T extends LayoutProp>(props: T) => {
    position: Responsive<"fixed" | "static" | "relative" | "absolute" | "sticky"> | undefined;
    width: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%"> | undefined;
    maxWidth: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%"> | undefined;
    minWidth: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%"> | undefined;
    height: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%"> | undefined;
    maxHeight: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%"> | undefined;
    minHeight: Responsive<"auto" | "max-content" | "min-content" | SpaceValue | "100%"> | undefined;
    top: Responsive<"0" | "auto" | "100%" | "50%"> | undefined;
    bottom: Responsive<"0" | "auto" | "100%" | "50%"> | undefined;
    left: Responsive<"0" | "auto" | "100%" | "50%"> | undefined;
    right: Responsive<"0" | "auto" | "100%" | "50%"> | undefined;
    shrink: Responsive<"0" | "1"> | undefined;
    grow: Responsive<"0" | "1"> | undefined;
    others: Omit<T, "height" | "width" | "top" | "left" | "right" | "bottom" | "position" | "maxWidth" | "minWidth" | "maxHeight" | "minHeight" | "shrink" | "grow">;
};
export declare const withLayoutProps: (props: LayoutProp) => string;
