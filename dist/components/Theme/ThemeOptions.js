export var COLOR_SCALES = [
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
var DEFAULT_APPEARANCE = 'dark';
var DEFAULT_RADIUS = 'medium';
var DEFAULT_ACCENT = 'purple';
function getMatchingGrayColor(accentColor) {
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
var themeDefaults = {
    appearance: 'dark',
    radius: 'medium',
    accentColor: 'purple',
};
export { getMatchingGrayColor, themeDefaults };
