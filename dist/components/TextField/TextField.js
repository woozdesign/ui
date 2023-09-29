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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { combineClassNames } from '../../utils/helper/combineClassNames';
import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import styles from './TextField.module.scss';
var TextField = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, label = _a.label, iconPrepend = _a.iconPrepend, iconAppend = _a.iconAppend, block = _a.block, errorMessage = _a.errorMessage, onChange = _a.onChange, onSubmit = _a.onSubmit, _c = _a.hasSubmitted, hasSubmitted = _c === void 0 ? false : _c, others = __rest(_a, ["size", "label", "iconPrepend", "iconAppend", "block", "errorMessage", "onChange", "onSubmit", "hasSubmitted"]);
    var groupClasses = [styles.group, styles[size], block ? styles.block : ''];
    var inputClasses = [styles.input, iconPrepend ? styles.hasPrependIcon : ''];
    var _d = useState(null), error = _d[0], setError = _d[1];
    var handleInvalid = function (e) {
        validateInput(e.target);
    };
    var handleInput = function (e) {
        if (hasSubmitted || e.target.value)
            validateInput(e.target);
        if (onChange)
            onChange(e);
    };
    var handleKeyPress = function (event) {
        if (event.key === 'Enter' && onSubmit) {
            if (hasSubmitted)
                validateInput(event.target);
            onSubmit();
        }
    };
    var getErrorBasedOnValidity = function (input) {
        if (errorMessage)
            return errorMessage;
        if (input.validity.valueMissing)
            return 'This field is required';
        if (input.validity.typeMismatch)
            return 'Invalid format';
        if (input.validity.patternMismatch)
            return 'Not valid input';
        if (input.validity.tooShort)
            return "Field should be at least ".concat(input.minLength, " characters; you entered ").concat(input.value.length, ".");
        return 'Invalid input';
    };
    var validateInput = function (input) {
        if (input.validity.valid) {
            setError(null);
        }
        else {
            setError(getErrorBasedOnValidity(input));
        }
    };
    return (React.createElement("div", { className: combineClassNames([styles.wrapper, styles[size]]) },
        label && (React.createElement("div", null,
            React.createElement(Typography.Paragraph, { type: 'secondary', size: 'small', className: styles.label },
                others.required && React.createElement("span", { style: { color: 'var(--color-error)', marginRight: '4px' } }, "*"),
                label))),
        React.createElement("div", { className: combineClassNames(groupClasses) },
            iconPrepend && React.createElement("span", { className: styles.iconPrepend }, iconPrepend),
            React.createElement("input", __assign({}, others, { "data-has-value": hasSubmitted, onChange: handleInput, onKeyPress: handleKeyPress, onInvalid: handleInvalid, className: combineClassNames(__spreadArray(__spreadArray([], inputClasses, true), [error ? styles.inputError : ''], false)) })),
            iconAppend && React.createElement("span", { className: styles.iconAppend }, iconAppend)),
        error && React.createElement("div", { className: styles.error }, error)));
};
export default TextField;
