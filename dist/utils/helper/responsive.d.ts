type Breakpoints = 'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Responsive<T> = T | Partial<Record<Breakpoints, T>>;
declare const withBreakpoints: (value: Responsive<string | boolean> | undefined, classPrefix?: string, styles?: Record<string, string>, valueMap?: Record<string, string>) => string;
declare function isBreakpointsObject<V extends string>(obj: Responsive<V | Omit<string, V>> | undefined): obj is Record<Breakpoints, string>;
export { withBreakpoints, isBreakpointsObject };
export type { Breakpoints, Responsive };
