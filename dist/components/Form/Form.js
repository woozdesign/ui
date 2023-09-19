'use client';
import React, { useState } from 'react';
import styles from './Form.module.scss';
var Form = function (_a) {
    var children = _a.children, onSuccess = _a.onSuccess, onError = _a.onError;
    var _b = useState(false), hasSubmitted = _b[0], setHasSubmitted = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (e.currentTarget.checkValidity()) {
            onSuccess(e);
        }
        else {
            onError();
        }
        setHasSubmitted(true);
    };
    return (React.createElement("form", { className: styles.form, onSubmit: handleSubmit, noValidate: true }, React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { hasSubmitted: hasSubmitted });
        }
        return child;
    })));
};
export default Form;
