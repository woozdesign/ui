export declare const COLOR_SCALES: ThemeAccentColor[];
export type ThemeAccentColor = 'gray' | 'gold' | 'bronze' | 'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'mauve' | 'slate' | 'olive' | 'sage' | 'sand' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'lime' | 'mint' | 'sky';
type ThemeAppearance = 'inherit' | 'light' | 'dark';
export type ThemeRadius = 'none' | 'small' | 'medium' | 'large' | 'full';
export type ThemeScaling = '90%' | '95%' | '100%' | '105%' | '110%';
export type ThemeHighContrast = true | false;
export type ThemeShadow = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type ThemeTranslucent = '10%' | '20%' | '40%' | '60%' | '80%';
export type ThemeOptions = {
    accentColor: ThemeAccentColor;
    appearance: ThemeAppearance;
    radius: ThemeRadius;
    scaling: ThemeScaling;
    shadow: ThemeShadow;
    translucent: ThemeTranslucent;
};
declare function getMatchingGrayColor(accentColor: ThemeAccentColor): ThemeAccentColor;
declare const themeDefaults: ThemeOptions;
export { getMatchingGrayColor, themeDefaults };
