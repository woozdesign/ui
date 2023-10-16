import * as React from 'react';
import { ThemeOptions } from './ThemeOptions';
interface ThemeChangeHandlers {
    onAppearanceChange: (appearance: ThemeOptions['appearance']) => void;
    onAccentColorChange: (accentColor: ThemeOptions['accentColor']) => void;
    onRadiusChange: (radius: ThemeOptions['radius']) => void;
    onScalingChange: (scaling: ThemeOptions['scaling']) => void;
    onTranslucentChange: (translucent: ThemeOptions['translucent']) => void;
}
interface ThemeContextValue extends ThemeOptions, ThemeChangeHandlers {
}
declare const useThemeContext: () => ThemeContextValue;
interface ThemeProviderProps extends ThemeRootProps {
}
declare const ThemeProvider: React.ForwardRefExoticComponent<ThemeProviderProps & React.RefAttributes<HTMLDivElement>>;
interface ThemeRootProps extends ThemeImplPublicProps {
}
interface ThemeImplPublicProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'dir'>, Partial<ThemeOptions> {
    isRoot?: boolean;
}
declare const updateThemeAppearanceClass: (appearance: ThemeOptions['appearance']) => void;
export { ThemeProvider, useThemeContext, updateThemeAppearanceClass };
export type { ThemeProviderProps, ThemeOptions };
