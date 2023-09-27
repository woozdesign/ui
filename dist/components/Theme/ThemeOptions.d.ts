export declare const COLOR_SCALES: ThemeAccentColor[];
type ThemeAccentColor = 'gray' | 'gold' | 'bronze' | 'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'mauve' | 'slate' | 'olive' | 'sage' | 'sand' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'lime' | 'mint' | 'sky';
type ThemeAppearance = 'inherit' | 'light' | 'dark';
type ThemeRadius = 'none' | 'small' | 'medium' | 'large' | 'full';
export type ThemeOptions = {
    accentColor: ThemeAccentColor;
    appearance: ThemeAppearance;
    radius: ThemeRadius;
};
declare function getMatchingGrayColor(accentColor: ThemeAccentColor): ThemeAccentColor;
declare const themeDefaults: ThemeOptions;
export { getMatchingGrayColor, themeDefaults };
