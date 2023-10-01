'use client';
import React, { FC, FormEvent, ReactNode, useState } from 'react';
import styles from './Form.module.scss';
import { TextFieldProps } from '../TextField/TextField';
import Button from '../Button';

export interface FormChildProps {
  hasSubmitted?: boolean;
}
export interface FormProps {
  children: React.ReactElement<FormChildProps> | React.ReactElement<FormChildProps>[];
  onSuccess: (e: FormEvent<HTMLFormElement>) => void;
  onError: () => void;
}

const Form: FC<FormProps> = ({ children, onSuccess, onError, ...others }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      onSuccess(e);
    } else {
      onError();
    }
    setHasSubmitted(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate {...others}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type !== Button) {
          return React.cloneElement<FormChildProps>(child, { hasSubmitted });
        }
        return child;
      })}
    </form>
  );
};

export default Form;
