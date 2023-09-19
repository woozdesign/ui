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
/* eslint-disable react/display-name */
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React from 'react';
import Typography from '../Typography/Typography';
import styles from './Card.module.scss';
var Card = function (_a) {
    var outlined = _a.outlined, backgroundColor = _a.backgroundColor, children = _a.children, others = __rest(_a, ["outlined", "backgroundColor", "children"]);
    var cardClasses = [styles.card];
    if (outlined) {
        cardClasses.push(styles['card--outlined']);
    }
    var cardStyle = {
        backgroundColor: backgroundColor,
    };
    return (React.createElement("div", __assign({ className: combineClassNames(cardClasses), style: cardStyle }, others), children));
};
Card.Title = function (_a) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 4 : _b, others = __rest(_a, ["children", "level"]);
    return (React.createElement("div", { className: styles.title },
        React.createElement(Typography.Title, __assign({ level: level, style: { margin: '0' } }, others), children)));
};
Card.Subtitle = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: styles.subtitle }, children);
};
Card.Text = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: styles.text }, children);
};
Card.Content = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: styles.content }, children);
};
Card.Actions = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: styles.actions }, children);
};
export default Card;
