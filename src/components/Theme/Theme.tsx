/* eslint-disable react/display-name */

'use client';

import React from 'react';
import classNames from 'classnames';
import { getMatchingGrayColor, ThemeOptions, themeDefaults, ColorToken, ThemeAppearance } from './ThemeOptions';

interface ThemeChangeHandlers {
  onAppearanceChange: (appearance: ThemeOptions['appearance']) => void;
  onAccentColorChange: (accentColor: ThemeOptions['accentColor']) => void;
  onRadiusChange: (radius: ThemeOptions['radius']) => void;
  onScalingChange: (scaling: ThemeOptions['scaling']) => void;
  onTranslucentChange: (translucent: ThemeOptions['translucent']) => void;
  onShadowChange: (shadow: ThemeOptions['shadow']) => void;
  onBorderWidthChange: (shadow: ThemeOptions['borderWidth']) => void;
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

interface ThemeRootProps extends ThemeImplPublicProps {}
const ThemeRoot = React.forwardRef<ThemeImplElement, ThemeRootProps>((props, forwardedRef) => {
  const {
    appearance: appearanceProp = themeDefaults.appearance,
    radius: radiusProp = themeDefaults.radius,
    accentColor: accentColorProp = themeDefaults.accentColor,
    scaling: scalingProp = themeDefaults.scaling,
    shadow: shadowProp = themeDefaults.shadow,
    borderWidth: borderWidthProp = themeDefaults.borderWidth,
    translucent: translucentProp = themeDefaults.translucent,
    colorToken: colorTokenProp,
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

  const [borderWidth, setBorderWidth] = React.useState(borderWidthProp);
  React.useEffect(() => setBorderWidth(borderWidthProp), [borderWidthProp]);

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

  React.useEffect(() => {
    if (colorTokenProp && appearance) {
      const css = generateThemeCSS(appearance, colorTokenProp);

      const styleElement = document.createElement('style');
      styleElement.innerText = css;
      document.head.appendChild(styleElement);

      // Cleanup: Remove the injected style when the component is unmounted or when appearance changes
      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, [colorTokenProp, appearance]);

  // const setCSSVars = (theme, colorToken) => {
  //   Object.entries(colorToken[theme]).forEach(([colorName, shades]) => {
  //     Object.entries(shades).forEach(([shade, value]) => {
  //       const cssVarName = `--color-${colorName}-${shade}`;
  //       document.documentElement.style.setProperty(cssVarName, value);
  //     });
  //   });
  // };

  // React.useEffect(() => {
  //   if (colorTokenProp && appearance) {
  //     setCSSVars(appearance, colorTokenProp);
  //   }
  //   // No cleanup function needed as we're modifying the :root directly.
  // }, [colorTokenProp, appearance]);

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
        borderWidth={borderWidth}
        //
        onAppearanceChange={setAppearance}
        onAccentColorChange={setAccentColor}
        onRadiusChange={setRadius}
        onScalingChange={setScaling}
        onTranslucentChange={setTranslucent}
        onShadowChange={setShadow}
        onBorderWidthChange={setBorderWidth}
      />
    </>
  );
});

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
    borderWidth = context?.borderWidth ?? themeDefaults.borderWidth,
    //
    onAppearanceChange = () => {},
    onRadiusChange = () => {},
    onAccentColorChange = () => {},
    onScalingChange = () => {},
    onTranslucentChange = () => {},
    onShadowChange = () => {},
    onBorderWidthChange = () => {},
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
          borderWidth,
          //
          onAppearanceChange,
          onAccentColorChange,
          onRadiusChange,
          onScalingChange,
          onTranslucentChange,
          onShadowChange,
          onBorderWidthChange,
        }),
        [
          appearance,
          radius,
          accentColor,
          scaling,
          translucent,
          shadow,
          borderWidth,
          //
          onAppearanceChange,
          onAccentColorChange,
          onRadiusChange,
          onScalingChange,
          onTranslucentChange,
          onShadowChange,
          onBorderWidthChange,
        ],
      )}
    >
      <Comp
        data-is-root-theme={isRoot ? 'true' : 'false'}
        data-radius={radius}
        data-scaling={scaling}
        data-translucent={translucent}
        data-shadow={shadow}
        data-border-width={borderWidth}
        data-accent-color={accentColor}
        ref={forwardedRef}
        {...themeProps}
        className={classes}
      />
    </ThemeContext.Provider>
  );
});

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

function generateThemeCSS(theme: ThemeAppearance, colorTokens: ColorToken) {
  let css = `:root, .${theme} .${theme}-theme {`;

  Object.keys(colorTokens[theme]).forEach((colorName) => {
    Object.entries(colorTokens[theme][colorName]).forEach(([shade, value]) => {
      css += `--color-${colorName}-${shade}: ${value};`;
    });
  });

  css += `}`;

  Object.keys(colorTokens[theme]).forEach((colorName) => {
    css += `[data-accent-color=${colorName}] {`;
    Object.entries(colorTokens[theme][colorName]).forEach(([shade, value]) => {
      css += `--color-accent-${shade}: var(--color-${colorName}-${shade});`;
    });
    css += '}';
  });

  return css;
}

export { ThemeProvider, useThemeContext, updateThemeAppearanceClass };
export type { ThemeProviderProps, ThemeOptions };
