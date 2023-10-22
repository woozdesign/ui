import { Responsive } from '../responsive';
export type DisplayValue = 'none' | 'block' | 'flex' | 'grid' | 'inline' | 'inline-flex' | 'inline-block' | 'inline-grid';
export interface DisplayProp {
    display?: Responsive<DisplayValue>;
}
export declare const extractDisplayProps: <T extends DisplayProp>(props: T) => {
    display: Responsive<DisplayValue> | undefined;
    others: Omit<T, "display">;
};
export declare const withDisplayProps: (props: DisplayProp) => string;
