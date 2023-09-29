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
import React from 'react';
import { combineClassNames } from '../../utils/helper/combineClassNames';
import styles from './Button.module.scss';
var Button = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.color, color = _e === void 0 ? 'purple' : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.block, block = _g === void 0 ? false : _g, _h = _a.highContrast, highContrast = _h === void 0 ? false : _h, _j = _a.shape, shape = _j === void 0 ? 'rect' : _j, _k = _a.buttonType, buttonType = _k === void 0 ? 'button' : _k, iconPrepend = _a.iconPrepend, iconAppend = _a.iconAppend, children = _a.children, onClick = _a.onClick, href = _a.href, other = __rest(_a, ["variant", "size", "color", "disabled", "block", "highContrast", "shape", "buttonType", "iconPrepend", "iconAppend", "children", "onClick", "href"]);
    var classNameList = [
        (_b = other.className) !== null && _b !== void 0 ? _b : '',
        styles.button,
        styles["button--".concat(size)],
        styles["button--".concat(variant)],
        disabled ? styles["button--disabled"] : '',
        block ? styles['button--block'] : '',
        highContrast ? styles['button--high-contrast'] : '',
        styles["button--".concat(shape)],
    ];
    var handleAnchorClick = function (e) {
        if (onClick)
            onClick(e);
    };
    var handleButtonClick = function (e) {
        if (onClick)
            onClick(e);
    };
    if (href) {
        return (React.createElement("a", __assign({ className: combineClassNames(classNameList), "data-accent-color": color, href: href, onClick: handleAnchorClick }, other),
            iconPrepend && React.createElement("span", { className: styles['icon-prepend'] }, iconPrepend),
            children,
            iconAppend && React.createElement("span", { className: styles['icon-append'] }, iconAppend)));
    }
    return (React.createElement("button", __assign({ className: combineClassNames(classNameList), "data-accent-color": color, disabled: disabled, onClick: handleButtonClick, type: buttonType }, other),
        iconPrepend && React.createElement("span", { className: styles['icon-prepend'] }, iconPrepend),
        children,
        iconAppend && React.createElement("span", { className: styles['icon-append'] }, iconAppend)));
};
export default Button;
