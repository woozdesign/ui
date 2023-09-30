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
type ThemeAppearance = 'inherit' | 'light' | 'dark';
type ThemeRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

export type ThemeOptions = {
  accentColor: ThemeAccentColor;
  appearance: ThemeAppearance;
  radius: ThemeRadius;
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
  appearance: 'dark',
  radius: 'medium',
  accentColor: 'purple',
};

export { getMatchingGrayColor, themeDefaults };
