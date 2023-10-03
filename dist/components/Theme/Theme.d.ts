import * as React from 'react';
import { ThemeOptions } from './ThemeOptions';
interface ThemeChangeHandlers {
    onAppearanceChange: (appearance: ThemeOptions['appearance']) => void;
    onAccentColorChange: (accentColor: ThemeOptions['accentColor']) => void;
    onRadiusChange: (radius: ThemeOptions['radius']) => void;
    onScalingChange: (scaling: ThemeOptions['scaling']) => void;
}
interface ThemeContextValue extends ThemeOptions, ThemeChangeHandlers {
}
interface ThemeProviderProps extends ThemeRootProps {
}
interface ThemeRootProps extends ThemeImplPublicProps {
}
interface ThemeImplPublicProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'dir'>, Partial<ThemeOptions> {
    isRoot?: boolean;
}
declare const _default: {
    ThemeProvider: React.ForwardRefExoticComponent<ThemeProviderProps & React.RefAttributes<HTMLDivElement>>;
    useThemeContext: () => ThemeContextValue;
    updateThemeAppearanceClass: (appearance: "inherit" | "dark" | "light") => void;
};
export default _default;
export type { ThemeProviderProps };
