'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { combineClassNames } from '../../utils';
import { themeDefaults } from './ThemeOptions';
var ThemeContext = React.createContext(undefined);
var useThemeContext = function () {
    var context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('`useThemeContext` must be used within a `ThemeProvider`');
    }
    return context;
};
var ThemeProvider = React.forwardRef(function (props, forwardedRef) {
    var context = React.useContext(ThemeContext);
    var isRoot = context === undefined;
    // Avoid rendering until we have a theme to avoid mismatches between server and client render
    if (isRoot) {
        return React.createElement(ThemeRoot, __assign({}, props, { ref: forwardedRef }));
    }
    return React.createElement(ThemeImpl, __assign({}, props, { ref: forwardedRef }));
});
ThemeProvider.displayName = 'ThemeProvider';
var ThemeRoot = React.forwardRef(function (props, forwardedRef) {
    var _a = props.appearance, appearanceProp = _a === void 0 ? themeDefaults.appearance : _a, _b = props.radius, radiusProp = _b === void 0 ? themeDefaults.radius : _b, _c = props.accentColor, accentColorProp = _c === void 0 ? themeDefaults.accentColor : _c, rootProps = __rest(props, ["appearance", "radius", "accentColor"]);
    var _d = React.useState(appearanceProp), appearance = _d[0], setAppearance = _d[1];
    React.useEffect(function () { return setAppearance(appearanceProp); }, [appearanceProp]);
    var _e = React.useState(radiusProp), radius = _e[0], setRadius = _e[1];
    React.useEffect(function () { return setRadius(radiusProp); }, [radiusProp]);
    var _f = React.useState(accentColorProp), accentColor = _f[0], setaccentColor = _f[1];
    React.useEffect(function () { return setaccentColor(accentColorProp); }, [accentColorProp]);
    // Initial appearance on page load when `appearance` is explicitly set to `light` or `dark`
    var ExplicitRootAppearanceScript = React.memo(function (_a) {
        var appearance = _a.appearance;
        return (React.createElement("script", { dangerouslySetInnerHTML: {
                __html: "!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='".concat(appearance, "';c.add('").concat(appearance, "');}catch(e){}})();"),
            } }));
    }, function () { return true; });
    ExplicitRootAppearanceScript.displayName = 'ExplicitRootAppearanceScript';
    // Client-side only changes when `appearance` prop is changed while developing
    React.useEffect(function () { return updateThemeAppearanceClass(appearanceProp); }, [appearanceProp]);
    // const resolvedGrayColor = grayColor === 'auto' ? getMatchingGrayColor(accentColorColor) : grayColor;
    return (React.createElement(React.Fragment, null,
        appearance !== 'inherit' && React.createElement(ExplicitRootAppearanceScript, { appearance: appearance }),
        React.createElement(ThemeImpl, __assign({}, rootProps, { ref: forwardedRef, isRoot: true, 
            //
            appearance: appearance, radius: radius, accentColor: accentColor, 
            //
            onAppearanceChange: setAppearance, onAccentColorChange: setaccentColor, onRadiusChange: setRadius }))));
});
ThemeRoot.displayName = 'ThemeRoot';
var ThemeImpl = React.forwardRef(function (props, forwardedRef) {
    var _a, _b, _c, _d;
    var context = React.useContext(ThemeContext);
    var isRoot = props.isRoot, 
    //
    _e = props.appearance, 
    //
    appearance = _e === void 0 ? (_a = context === null || context === void 0 ? void 0 : context.appearance) !== null && _a !== void 0 ? _a : themeDefaults.appearance : _e, _f = props.accentColor, accentColor = _f === void 0 ? (_b = context === null || context === void 0 ? void 0 : context.accentColor) !== null && _b !== void 0 ? _b : themeDefaults.accentColor : _f, _g = props.radius, radius = _g === void 0 ? (_c = context === null || context === void 0 ? void 0 : context.radius) !== null && _c !== void 0 ? _c : themeDefaults.radius : _g, 
    //
    _h = props.onAppearanceChange, 
    //
    onAppearanceChange = _h === void 0 ? function () { } : _h, _j = props.onRadiusChange, onRadiusChange = _j === void 0 ? function () { } : _j, _k = props.onAccentColorChange, onAccentColorChange = _k === void 0 ? function () { } : _k, 
    //
    themeProps = __rest(props, ["isRoot", "appearance", "accentColor", "radius", "onAppearanceChange", "onRadiusChange", "onAccentColorChange"]);
    var Comp = 'div';
    var classes = combineClassNames(["woozdesign", "woozdesign-".concat(appearance), "".concat(appearance), "".concat(appearance, "-theme"), (_d = themeProps.className) !== null && _d !== void 0 ? _d : '']);
    return (React.createElement(ThemeContext.Provider, { value: React.useMemo(function () { return ({
            appearance: appearance,
            radius: radius,
            accentColor: accentColor,
            //
            onAppearanceChange: onAppearanceChange,
            onAccentColorChange: onAccentColorChange,
            onRadiusChange: onRadiusChange,
        }); }, [
            appearance,
            radius,
            accentColor,
            //
            onAppearanceChange,
            onAccentColorChange,
            onRadiusChange,
        ]) },
        React.createElement(Comp, __assign({ "data-is-root-theme": isRoot ? 'true' : 'false', "data-radius": radius, "data-accent-color": accentColor, ref: forwardedRef }, themeProps, { className: classes }))));
});
ThemeImpl.displayName = 'ThemeImpl';
var updateThemeAppearanceClass = function (appearance) {
    var root = document.documentElement;
    if (root.classList.contains('light-theme') || root.classList.contains('dark-theme')) {
        root.classList.remove('light-theme', 'dark-theme');
        root.style.colorScheme = appearance;
        root.classList.add("".concat(appearance, "-theme"));
    }
    if (root.classList.contains('light') || root.classList.contains('dark')) {
        root.classList.remove('light', 'dark');
        root.style.colorScheme = appearance;
        root.classList.add(appearance);
    }
};
export default { ThemeProvider: ThemeProvider, useThemeContext: useThemeContext, updateThemeAppearanceClass: updateThemeAppearanceClass };
