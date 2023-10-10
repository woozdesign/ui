'use client';
import classNames from 'classnames';
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import Button from '../Button';
import Card from '../Card';
import styles from './Modal.module.scss';

interface ModalContextProps {
  onClose: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ModalContext = React.createContext<ModalContextProps | undefined>(undefined);
interface ModalProps {
  children: ReactNode;
  variant?: 'default' | 'confirm';
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
}
const Root: FC<ModalProps> = ({ children, onClose, onCancel, onConfirm, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const overlayClasses = classNames(styles.overlay, { [styles.open]: isOpen });
  const modalClasses = classNames(styles.modal, { [styles.open]: isOpen });
  const handleOverlayClick = () => {
    if (variant === 'default') handleClose();
  };

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
      onClose && onClose(); // Call the onClose prop when closing the modal
    } else {
      setIsRendered(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 50); // delay to allow the modal to render before applying the transition
    }
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 200); // delay to allow the transition to complete before unmounting
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ onClose: handleClose, onCancel, onConfirm }}>
      {React.Children.map(children, (child) => (React.isValidElement(child) && child.type === Trigger ? child : null))}

      {isRendered && (
        <div className={overlayClasses} onClick={handleOverlayClick}>
          <div className={modalClasses}>{React.Children.map(children, (child) => (React.isValidElement(child) && child.type !== Trigger ? React.cloneElement(child) : null))}</div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

interface TriggerProps {
  children: ReactNode;
}

const Trigger: FC<TriggerProps> = ({ children }) => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('Trigger must be used within Root');

  return (
    <div className={styles.trigger} onClick={context.onClose}>
      {children}
    </div>
  );
};

interface ContentProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  confirmText?: string;
  cancelText?: string;
}

const Content: FC<ContentProps> = ({ title, subtitle, confirmText = 'Confirm', cancelText = 'Cancel', children }) => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('Content must be used within Root');

  const { onClose, onCancel, onConfirm } = context;

  const handleCancel = () => {
    onCancel && onCancel();
    onClose();
  };

  const handleConfirm = () => {
    onConfirm && onConfirm();
    onClose();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.content} onClick={stopPropagation}>
      <Card size={'large'}>
        {(title || subtitle) && <Card.Heading title={title} titleSize={5} subtitle={subtitle} outlined={false}></Card.Heading>}
        <Card.Body content={children}></Card.Body>
        <Card.Actions justify={'end'} outlined={false}>
          <Button variant={'outlined'} color={'gray'} highContrast onClick={handleCancel}>
            {cancelText}
          </Button>
          <Button variant={'solid'} onClick={handleConfirm}>
            {confirmText}
          </Button>
        </Card.Actions>
      </Card>
    </div>
  );
};

const Modal = {
  Root: Root,
  Trigger: Trigger,
  Content: Content,
};

export default Modal;
