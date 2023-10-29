export const COLOR_SCALES: ThemeAccentColor[] = [
  'gray',
  'gold',
  'bronze',
  'brown',
  'yellow',
  'amber',
  'orange',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'mauve',
  'slate',
  'olive',
  'sage',
  'sand',
  'grass',
  'lime',
  'mint',
  'sky',
];

export type ThemeAccentColor =
  | 'gray'
  | 'gold'
  | 'bronze'
  | 'brown'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'mauve'
  | 'slate'
  | 'olive'
  | 'sage'
  | 'sand'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'lime'
  | 'mint'
  | 'sky';

type ColorShades = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6' | 'a7' | 'a8' | 'a9' | 'a10' | 'a11' | 'a12';

export type ThemeAppearance = 'inherit' | 'light' | 'dark';
export type ThemeRadius = 'none' | 'small' | 'medium' | 'large' | 'full';
export type ThemeScaling = '90%' | '95%' | '100%' | '105%' | '110%';
export type ThemeHighContrast = true | false;
export type ThemeShadow = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type ThemeTranslucent = '10%' | '20%' | '40%' | '60%' | '80%';

export type ColorToken = {
  [theme in ThemeAppearance]: {
    [colorName in string]: {
      [shade in ColorShades]: string;
    };
  };
};

export type ThemeOptions = {
  accentColor: ThemeAccentColor & string;
  appearance: ThemeAppearance;
  radius: ThemeRadius;
  scaling: ThemeScaling;
  shadow: ThemeShadow;
  translucent: ThemeTranslucent;
  colorToken?: ColorToken;
};

function getMatchingGrayColor(accentColor: ThemeAccentColor): ThemeAccentColor {
  // if (accentColor === 'gray') return 'gray';
  switch (accentColor) {
    case 'tomato':
    case 'red':
    case 'ruby':
    case 'crimson':
    case 'pink':
    case 'plum':
    case 'purple':
    case 'violet':
      return 'mauve';
    case 'iris':
    case 'indigo':
    case 'blue':
    case 'sky':
    case 'cyan':
      return 'slate';
    case 'teal':
    case 'jade':
    case 'mint':
    case 'green':
      return 'sage';
    case 'grass':
    case 'lime':
      return 'olive';
    case 'yellow':
    case 'amber':
    case 'orange':
    case 'brown':
    case 'gold':
    case 'bronze':
      return 'sand';
  }
  return 'gray';
}

const themeDefaults: ThemeOptions = {
  appearance: 'light',
  radius: 'medium',
  accentColor: 'gray',
  scaling: '100%',
  translucent: '40%',
  shadow: '0',
};

export { getMatchingGrayColor, themeDefaults };
