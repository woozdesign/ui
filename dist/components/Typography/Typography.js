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
/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineClassNames } from '../../utils/helper/combineClassNames';
import React from 'react';
import styles from './Typography.module.scss';
var Title = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 2 : _b, _c = _a.color, color = _c === void 0 ? 'gray' : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? '' : _d, other = __rest(_a, ["level", "color", "children", "className"]);
    var Tag = "h".concat(level);
    var titleStyle = styles["title-".concat(level)];
    var combinedClass = combineClassNames([titleStyle, className]);
    return (React.createElement(Tag, __assign({ className: combinedClass, "data-accent-color": color }, other), children));
};
var Subtitle = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 6 : _b, _c = _a.color, color = _c === void 0 ? 'gray' : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? '' : _d, other = __rest(_a, ["level", "color", "children", "className"]);
    var Tag = "h".concat(level);
    var titleStyle = styles["subtitle-".concat(level)];
    var combinedClass = combineClassNames([titleStyle, className]);
    return (React.createElement(Tag, __assign({ className: combinedClass, "data-accent-color": color }, other), children));
};
var Text = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.color, color = _c === void 0 ? 'gray' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, other = __rest(_a, ["children", "size", "color", "className"]);
    var textStyle = styles["text--".concat(size)];
    var combinedClass = combineClassNames([textStyle, className]);
    return (React.createElement("span", __assign({ className: combinedClass, "data-accent-color": color }, other), children));
};
var Paragraph = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'gray' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, other = __rest(_a, ["children", "color", "size", "className"]);
    var textStyle = styles["text--".concat(size)];
    var combinedClass = combineClassNames([textStyle, className]);
    return (React.createElement("p", __assign({ className: combinedClass, "data-accent-color": color }, other), children));
};
var Typography = {
    Title: Title,
    Text: Text,
    Subtitle: Subtitle,
    Paragraph: Paragraph,
};
export default Typography;
