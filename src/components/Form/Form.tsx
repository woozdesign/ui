'use client';
import React, { FC, FormEvent, ReactNode, useState } from 'react';
import styles from './Form.module.scss';

interface FormProps {
  children: ReactNode;
  onSuccess: (e: FormEvent<HTMLFormElement>) => void;
  onError: () => void;
}

const Form: FC<FormProps> = ({ children, onSuccess, onError }) => {
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
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { hasSubmitted });
        }
        return child;
      })}
    </form>
  );
};

export default Form;
