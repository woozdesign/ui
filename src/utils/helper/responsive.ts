type Breakpoints = 'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Responsive<T> = T | Partial<Record<Breakpoints, T>>;

const withBreakpoints = (
  value: Responsive<string | boolean> | undefined, // Value to check
  classPrefix = '', // CSS class prefix, e.g. "px" in "px-1" class
  styles?: Record<string, string>, // Support Style Module
  valueMap?: Record<string, string>, // Optionally, an object to map prop values to a different CSS suffix
) => {
  const classes: string[] = [];

  if (typeof value === 'object') {
    for (const bp of Object.keys(value) as Breakpoints[]) {
      if (bp in value) {
        const str = value[bp]?.toString();
        const isNegative = str?.startsWith('-');
        const delimiter = classPrefix === '' ? '' : '-';
        const prefix = isNegative ? `-${classPrefix}` : classPrefix;
        const matchedValue = isNegative ? str?.substring(1) : str;

        if (matchedValue === undefined) {
          continue;
        }

        const suffix = valueMap?.[matchedValue] ?? matchedValue;

        const className = bp === 'initial' ? `${prefix}${delimiter}${suffix}` : `${bp}-${prefix}${delimiter}${suffix}`;

        classes.push(styles ? styles[className] : className);
      }
    }
  }

  if (typeof value === 'string') {
    const isNegative = value.startsWith('-');
    const delimiter = classPrefix === '' ? '' : '-';
    const prefix = isNegative ? `-${classPrefix}` : classPrefix;
    const matchedValue = isNegative ? value.substring(1) : value;
    const suffix = valueMap?.[matchedValue] ?? matchedValue;

    const className = `${prefix}${delimiter}${suffix}`;
    classes.push(styles ? styles[className] : className);
  }

  if (typeof value === 'boolean') {
    const delimiter = classPrefix === '' ? '' : '-';
    const matchedValue = value.toString();
    const suffix = valueMap?.[matchedValue] ?? matchedValue;
    const className = `${classPrefix}${delimiter}${suffix}`;

    classes.push(styles ? styles[className] : className);
  }

  return classes.join(' ');
};

function isBreakpointsObject<V extends string>(obj: Responsive<V | Omit<string, V>> | undefined): obj is Record<Breakpoints, string> {
  return typeof obj === 'object';
}

export { withBreakpoints, isBreakpointsObject };
export type { Breakpoints, Responsive };
