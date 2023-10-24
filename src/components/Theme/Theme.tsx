'use client';

import React from 'react';
import classNames from 'classnames';
import { getMatchingGrayColor, ThemeOptions, themeDefaults } from './ThemeOptions';

interface ThemeChangeHandlers {
  onAppearanceChange: (appearance: ThemeOptions['appearance']) => void;
  onAccentColorChange: (accentColor: ThemeOptions['accentColor']) => void;
  onRadiusChange: (radius: ThemeOptions['radius']) => void;
  onScalingChange: (scaling: ThemeOptions['scaling']) => void;
  onTranslucentChange: (translucent: ThemeOptions['translucent']) => void;
  onShadowChange: (shadow: ThemeOptions['shadow']) => void;
}
interface ThemeContextValue extends ThemeOptions, ThemeChangeHandlers {}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('`useThemeContext` must be used within a `ThemeProvider`');
  }
  return context;
};

interface ThemeProviderProps extends ThemeRootProps {}
const ThemeProvider = React.forwardRef<ThemeImplElement, ThemeProviderProps>((props, forwardedRef) => {
  const context = React.useContext(ThemeContext);
  const isRoot = context === undefined;

  // Avoid rendering until we have a theme to avoid mismatches between server and client render
  if (isRoot) {
    return <ThemeRoot {...props} ref={forwardedRef} />;
  }
  return <ThemeImpl {...props} ref={forwardedRef} />;
});
ThemeProvider.displayName = 'ThemeProvider';

interface ThemeRootProps extends ThemeImplPublicProps {}
const ThemeRoot = React.forwardRef<ThemeImplElement, ThemeRootProps>((props, forwardedRef) => {
  const {
    appearance: appearanceProp = themeDefaults.appearance,
    radius: radiusProp = themeDefaults.radius,
    accentColor: accentColorProp = themeDefaults.accentColor,
    scaling: scalingProp = themeDefaults.scaling,
    shadow: shadowProp = themeDefaults.shadow,
    translucent: translucentProp = themeDefaults.translucent,
    ...rootProps
  } = props;

  const [appearance, setAppearance] = React.useState(appearanceProp);
  React.useEffect(() => setAppearance(appearanceProp), [appearanceProp]);

  const [radius, setRadius] = React.useState(radiusProp);
  React.useEffect(() => setRadius(radiusProp), [radiusProp]);

  const [accentColor, setAccentColor] = React.useState(accentColorProp);
  React.useEffect(() => setAccentColor(accentColorProp), [accentColorProp]);

  const [scaling, setScaling] = React.useState(scalingProp);
  React.useEffect(() => setScaling(scalingProp), [scalingProp]);

  const [translucent, setTranslucent] = React.useState(translucentProp);
  React.useEffect(() => setTranslucent(translucentProp), [translucentProp]);

  const [shadow, setShadow] = React.useState(shadowProp);
  React.useEffect(() => setShadow(shadowProp), [shadowProp]);

  // Initial appearance on page load when `appearance` is explicitly set to `light` or `dark`
  const ExplicitRootAppearanceScript = React.memo(
    ({ appearance }: { appearance: Exclude<ThemeOptions['appearance'], 'inherit'> }) => (
      <script
        dangerouslySetInnerHTML={{
          __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${appearance}';c.add('${appearance}');}catch(e){}})();`,
        }}
      ></script>
    ),
    () => true, // Never re-render
  );
  ExplicitRootAppearanceScript.displayName = 'ExplicitRootAppearanceScript';

  // Client-side only changes when `appearance` prop is changed while developing
  React.useEffect(() => updateThemeAppearanceClass(appearanceProp), [appearanceProp]);

  // const resolvedGrayColor = grayColor === 'auto' ? getMatchingGrayColor(accentColorColor) : grayColor;

  return (
    <>
      {appearance !== 'inherit' && <ExplicitRootAppearanceScript appearance={appearance} />}

      <ThemeImpl
        {...rootProps}
        ref={forwardedRef}
        isRoot
        //
        appearance={appearance}
        radius={radius}
        accentColor={accentColor}
        scaling={scaling}
        translucent={translucent}
        shadow={shadow}
        //
        onAppearanceChange={setAppearance}
        onAccentColorChange={setAccentColor}
        onRadiusChange={setRadius}
        onScalingChange={setScaling}
        onTranslucentChange={setTranslucent}
        onShadowChange={setShadow}
      />
    </>
  );
});
ThemeRoot.displayName = 'ThemeRoot';

type ThemeImplElement = React.ElementRef<'div'>;

interface ThemeImplPublicProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'dir'>, Partial<ThemeOptions> {
  isRoot?: boolean;
}
interface ThemeImplPrivateProps extends Partial<ThemeChangeHandlers> {}

interface ThemeImplProps extends ThemeImplPublicProps, ThemeImplPrivateProps {}
const ThemeImpl = React.forwardRef<ThemeImplElement, ThemeImplProps>((props, forwardedRef) => {
  const context = React.useContext(ThemeContext);
  const {
    isRoot,
    //
    appearance = context?.appearance ?? themeDefaults.appearance,
    accentColor = context?.accentColor ?? themeDefaults.accentColor,
    radius = context?.radius ?? themeDefaults.radius,
    scaling = context?.scaling ?? themeDefaults.scaling,
    translucent = context?.translucent ?? themeDefaults.translucent,
    shadow = context?.shadow ?? themeDefaults.shadow,
    //
    onAppearanceChange = () => {},
    onRadiusChange = () => {},
    onAccentColorChange = () => {},
    onScalingChange = () => {},
    onTranslucentChange = () => {},
    onShadowChange = () => {},

    //
    ...themeProps
  } = props;
  const Comp = 'div';

  const classes = classNames(
    `woozdesign`,
    {
      light: !isRoot && appearance == 'light',
      dark: !isRoot && appearance == 'dark',
    },
    themeProps.className,
  );
  return (
    <ThemeContext.Provider
      value={React.useMemo(
        () => ({
          appearance,
          radius,
          accentColor,
          scaling,
          translucent,
          shadow,
          //
          onAppearanceChange,
          onAccentColorChange,
          onRadiusChange,
          onScalingChange,
          onTranslucentChange,
          onShadowChange,
        }),
        [
          appearance,
          radius,
          accentColor,
          scaling,
          translucent,
          shadow,
          //
          onAppearanceChange,
          onAccentColorChange,
          onRadiusChange,
          onScalingChange,
          onTranslucentChange,
          onShadowChange,
        ],
      )}
    >
      <Comp
        data-is-root-theme={isRoot ? 'true' : 'false'}
        data-radius={radius}
        data-scaling={scaling}
        data-translucent={translucent}
        data-shadow={shadow}
        data-accent-color={accentColor}
        ref={forwardedRef}
        {...themeProps}
        className={classes}
      />
    </ThemeContext.Provider>
  );
});
ThemeImpl.displayName = 'ThemeImpl';

const updateThemeAppearanceClass = (appearance: ThemeOptions['appearance']) => {
  const root = document.documentElement;

  if (root.classList.contains('light-theme') || root.classList.contains('dark-theme')) {
    root.classList.remove('light-theme', 'dark-theme');
    root.style.colorScheme = appearance;
    root.classList.add(`${appearance}-theme`);
    return;
  }

  if (root.classList.contains('light') || root.classList.contains('dark')) {
    root.classList.remove('light', 'dark');
    root.style.colorScheme = appearance;
    root.classList.add(appearance);
    return;
  }

  root.style.colorScheme = appearance;
  root.classList.add(appearance);
  return;
};

export { ThemeProvider, useThemeContext, updateThemeAppearanceClass };
export type { ThemeProviderProps, ThemeOptions };
