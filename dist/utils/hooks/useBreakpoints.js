import { useEffect, useState } from 'react';
export var breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
};
export var useBreakpoint = function () {
    var getBreakpointData = function () {
        var width = typeof window !== 'undefined' ? window.innerWidth : 0;
        var currentBreakpoint;
        if (width >= breakpoints.xxl)
            currentBreakpoint = 'xxl';
        else if (width >= breakpoints.xl)
            currentBreakpoint = 'xl';
        else if (width >= breakpoints.lg)
            currentBreakpoint = 'lg';
        else if (width >= breakpoints.md)
            currentBreakpoint = 'md';
        else if (width >= breakpoints.sm)
            currentBreakpoint = 'sm';
        else
            currentBreakpoint = 'xs';
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
    var _a = useState(getBreakpointData), breakpointData = _a[0], setBreakpointData = _a[1];
    useEffect(function () {
        var handleResize = function () {
            setBreakpointData(getBreakpointData());
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return function () { return window.removeEventListener('resize', handleResize); };
        }
    }, []);
    return breakpointData;
};
