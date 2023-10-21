'use client';
import classNames from 'classnames';
import React, { FC, useContext, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';
import Card from '../Card';
import styles from './Modal.module.scss';
import { ContentProps, ModalContextProps, ModalProps } from './Modal.props';

const ModalContext = React.createContext<ModalContextProps | undefined>(undefined);

const Root: FC<ModalProps> = ({ children, open = false, onClose, onCancel, onConfirm, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [isRendered, setIsRendered] = useState(open);
  const [targetElement, setTargetElement] = useState<Element | null>(null);

  const overlayClasses = classNames(styles.overlay, { [styles.open]: isOpen });
  const modalClasses = classNames(styles.modal, { [styles.open]: isOpen });
  const handleOverlayClick = () => {
    if (variant === 'default') handleClose();
  };
  useEffect(() => {
    // Instead of querying the DOM directly during the render,
    // move this to a useEffect to ensure it's only done client-side.
    setTargetElement(document.querySelector('.woozdesign'));
  }, [setTargetElement]);

  const handleClose = () => {
    if (isOpen) {
      onClose && onClose(); // Call the onClose prop when closing the modal
    } else {
      setIsRendered(true);
    }
  };

  useEffect(() => {
    if (!open) {
      setIsOpen(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 200); // delay to allow the transition to complete before unmounting
      return () => clearTimeout(timer);
    } else {
      setIsRendered(true);
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 50);
    }
  }, [open]);

  useEffect(() => {
    if (isOpen) {
      // Save the previous overflow style to revert back to it when the modal is closed
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Cleanup function: revert back to the original overflow style
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ onClose: handleClose, onCancel, onConfirm }}>
      {/* {React.Children.map(children, (child) => (React.isValidElement(child) && child.type === Trigger ? child : null))} */}

      {isRendered &&
        (targetElement ? (
          ReactDom.createPortal(
            <>
              <div className={overlayClasses} onClick={handleOverlayClick}>
                <div className={modalClasses}>{React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child) : null))}</div>
              </div>
            </>,
            targetElement,
          )
        ) : (
          <div className={overlayClasses} onClick={handleOverlayClick}>
            <div className={modalClasses}>{React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child) : null))}</div>
          </div>
        ))}
    </ModalContext.Provider>
  );
};

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
        {(title || subtitle) && <Card.Header title={title} titleSize={5} subtitle={subtitle} outlined={false}></Card.Header>}
        <Card.Body content={children}></Card.Body>
        <Card.Action justify={'end'} outlined={false}>
          <Button variant={'outlined'} color={'gray'} highContrast onClick={handleCancel}>
            {cancelText}
          </Button>
          <Button variant={'solid'} onClick={handleConfirm}>
            {confirmText}
          </Button>
        </Card.Action>
      </Card>
    </div>
  );
};

const Modal = {
  Root: Root,
  Content: Content,
};

export default Modal;
