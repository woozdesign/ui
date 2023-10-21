import { useEffect, useState } from 'react';

export type TBreakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type BreakpointKeys = keyof TBreakpoints;

export const breakpoints: TBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export type CurrentBreakpoint = {
  breakpoint: BreakpointKeys;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
  xsAndUp: boolean;
  smAndDown: boolean;
  smAndUp: boolean;
  mdAndDown: boolean;
  mdAndUp: boolean;
  lgAndDown: boolean;
  lgAndUp: boolean;
  xlAndDown: boolean;
  xlAndUp: boolean;
  xxlAndDown: boolean;
};

export const useBreakpoint = (): CurrentBreakpoint => {
  const getBreakpointData = (): CurrentBreakpoint => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 0;

    let currentBreakpoint: BreakpointKeys;

    if (width >= breakpoints.xxl) currentBreakpoint = 'xxl';
    else if (width >= breakpoints.xl) currentBreakpoint = 'xl';
    else if (width >= breakpoints.lg) currentBreakpoint = 'lg';
    else if (width >= breakpoints.md) currentBreakpoint = 'md';
    else if (width >= breakpoints.sm) currentBreakpoint = 'sm';
    else currentBreakpoint = 'xs';

    return {
      breakpoint: currentBreakpoint,
      xsAndUp: width >= breakpoints.xs,
      smAndDown: width < breakpoints.md,
      smAndUp: width >= breakpoints.sm,
      mdAndDown: width < breakpoints.lg,
      mdAndUp: width >= breakpoints.md,
      lgAndDown: width < breakpoints.xl,
      lgAndUp: width >= breakpoints.lg,
      xlAndDown: width < breakpoints.xxl,
      xlAndUp: width >= breakpoints.xl,
      xxlAndDown: true,
      xs: currentBreakpoint == 'xs',
      sm: currentBreakpoint == 'sm',
      md: currentBreakpoint == 'md',
      lg: currentBreakpoint == 'lg',
      xl: currentBreakpoint == 'xl',
      xxl: currentBreakpoint == 'xxl',
    };
  };

  const [breakpointData, setBreakpointData] = useState<CurrentBreakpoint>(getBreakpointData);

  useEffect(() => {
    const handleResize = () => {
      setBreakpointData(getBreakpointData());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return breakpointData;
};
