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
import React from 'react';
import { combineClassNames } from '../../utils';
import Typography from '../Typography/Typography';
import styles from './Card.module.scss';
var Card = function (_a) {
    var _b = _a.outlined, outlined = _b === void 0 ? true : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, children = _a.children, others = __rest(_a, ["outlined", "size", "children"]);
    var cardClasses = [styles.card, styles["card--".concat(size)]];
    if (outlined) {
        cardClasses.push(styles['card--outlined']);
    }
    // if (size) {
    //   cardClasses.push(styles[`card--${size}`]); // This will add classes like card--small, card--medium, etc.
    // }
    return (React.createElement("div", __assign({ className: combineClassNames(cardClasses) }, others), children));
};
Card.Heading = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, action = _a.action, _b = _a.titleLevel, titleLevel = _b === void 0 ? 5 : _b, _c = _a.outlined, outlined = _c === void 0 ? true : _c;
    var classes = [styles.heading, outlined ? styles["heading--outlined"] : ''];
    return (React.createElement("div", { className: combineClassNames(classes) },
        React.createElement("div", null,
            React.createElement(Typography.Title, { className: styles.title, level: titleLevel }, title),
            subtitle && React.createElement(Typography.Subtitle, { className: styles.subtitle }, subtitle)),
        action && React.createElement("div", { className: styles['heading-action'] }, action)));
};
Card.Body = function (_a) {
    var title = _a.title, description = _a.description, _b = _a.titleLevel, titleLevel = _b === void 0 ? 5 : _b;
    return (React.createElement("div", { className: styles.body },
        title && (React.createElement(Typography.Title, { className: styles.title, level: titleLevel }, title)),
        description && React.createElement(Typography.Text, { className: styles.description }, description)));
};
Card.Actions = function (_a) {
    var children = _a.children, _b = _a.justify, justify = _b === void 0 ? 'start' : _b, _c = _a.outlined, outlined = _c === void 0 ? true : _c;
    var classes = [styles.actions, outlined ? styles["actions--outlined"] : ''];
    return (React.createElement("div", { className: combineClassNames(classes), style: { justifyContent: justify } }, children));
};
export default Card;
