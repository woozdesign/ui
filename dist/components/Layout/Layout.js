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
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React from 'react';
import styles from './Layout.module.scss';
export var Container = function (_a) {
    var _b;
    var children = _a.children, others = __rest(_a, ["children"]);
    var classes = [styles.container, (_b = others.className) !== null && _b !== void 0 ? _b : ''];
    var combinedStyles = __assign({}, others.style);
    return (React.createElement("div", __assign({}, others, { className: combineClassNames(classes), style: combinedStyles }), children));
};
export var Row = function (_a) {
    var _b;
    var _c = _a.gutter, gutter = _c === void 0 ? [0, 0] : _c, _d = _a.align, align = _d === void 0 ? 'start' : _d, _e = _a.justify, justify = _e === void 0 ? 'start' : _e, children = _a.children, others = __rest(_a, ["gutter", "align", "justify", "children"]);
    var classes = [styles.row, (_b = others.className) !== null && _b !== void 0 ? _b : ''];
    var combinedStyle = __assign({ alignItems: align, justifyContent: justify, '--horizontal-gutter': "".concat(gutter[0], "px"), '--vertical-gutter': "".concat(gutter[1], "px") }, others.style);
    return (React.createElement("div", __assign({}, others, { className: combineClassNames(classes), style: combinedStyle }), children));
};
export var Col = function (_a) {
    var _b;
    var xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, children = _a.children, others = __rest(_a, ["xs", "sm", "md", "lg", "xl", "children"]);
    var classes = [
        styles.col,
        (_b = others.className) !== null && _b !== void 0 ? _b : '',
        xs ? styles["xs-".concat(xs)] : '',
        sm ? styles["sm-".concat(sm)] : '',
        md ? styles["md-".concat(md)] : '',
        lg ? styles["lg-".concat(lg)] : '',
        xl ? styles["xl-".concat(xl)] : '',
    ];
    var combinedStyle = __assign({}, others.style);
    return (React.createElement("div", __assign({}, others, { className: combineClassNames(classes), style: combinedStyle }), children));
};
var Layout = {
    Container: Container,
    Row: Row,
    Col: Col,
};
export default Layout;
