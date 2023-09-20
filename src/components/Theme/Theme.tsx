'use client';

import * as React from 'react';
import { combineClassNames } from '@/utils';

type ThemeAppearance = 'inherit' | 'light' | 'dark';
type ThemeRadius = 'none' | 'small' | 'medium' | 'large' | 'full';
const DEFAULT_APPEARANCE: ThemeAppearance = 'dark';
const DEFAULT_RADIUS: ThemeRadius = 'medium';

type ThemeOptions = {
  appearance: ThemeAppearance;
  radius: ThemeRadius;
};
interface ThemeChangeHandlers {
  onAppearanceChange: (appearance: ThemeOptions['appearance']) => void;
  onRadiusChange: (radius: ThemeOptions['radius']) => void;
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
  const { appearance: appearanceProp = DEFAULT_APPEARANCE, radius: radiusProp = DEFAULT_RADIUS, ...rootProps } = props;

  const [appearance, setAppearance] = React.useState(appearanceProp);
  React.useEffect(() => setAppearance(appearanceProp), [appearanceProp]);
  const [radius, setRadius] = React.useState(radiusProp);
  React.useEffect(() => setRadius(radiusProp), [radiusProp]);

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
        //
        onAppearanceChange={setAppearance}
        onRadiusChange={setRadius}
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
    appearance = context?.appearance ?? DEFAULT_APPEARANCE,
    radius = context?.radius ?? DEFAULT_RADIUS,
    //
    onAppearanceChange = () => {},
    onRadiusChange = () => {},
    //
    ...themeProps
  } = props;
  const Comp = 'div';

  const classes = combineClassNames([`woozdesign`, `woozdesign-${appearance}`, `${appearance}`, `${appearance}-theme`, themeProps.className ?? '']);
  return (
    <ThemeContext.Provider
      value={React.useMemo(
        () => ({
          appearance,
          radius,
          //
          onAppearanceChange,
          onRadiusChange,
        }),
        [
          appearance,
          radius,
          //
          onAppearanceChange,
          onRadiusChange,
        ],
      )}
    >
      <Comp data-is-root-theme={isRoot ? 'true' : 'false'} data-radius={radius} ref={forwardedRef} {...themeProps} className={classes} />
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
  }

  if (root.classList.contains('light') || root.classList.contains('dark')) {
    root.classList.remove('light', 'dark');
    root.style.colorScheme = appearance;
    root.classList.add(appearance);
  }
};

export default { ThemeProvider, useThemeContext, updateThemeAppearanceClass };
export type { ThemeProviderProps };
