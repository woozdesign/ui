'use client';
import { useTransitionState } from '@/utils';
import classNames from 'classnames';
import React, { FC, useContext, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Card from '../Card';
import styles from './Modal.module.scss';
import { ActionProps, ContentProps, ModalContextProps, ModalProps } from './Modal.props';

const ModalContext = React.createContext<ModalContextProps | undefined>(undefined);

const Root: FC<ModalProps> = (props) => {
  const { className, style, children, open = false, onClose, onCancel, onConfirm, variant = 'default', shadow = 4, radius } = props;

  const [isOpen, isRendered] = useTransitionState(open, 200);

  const [targetElement, setTargetElement] = useState<Element | null>(null);

  const overlayClasses = classNames(styles.overlay, { [styles.open]: isOpen });
  const modalClasses = classNames(styles.modal, { [styles.open]: isOpen }, className);

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
    }
  };

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
      {isRendered &&
        (targetElement ? (
          ReactDom.createPortal(
            <>
              <div className={overlayClasses} onClick={handleOverlayClick}>
                <div data-radius={radius} data-shadow={shadow} className={modalClasses} style={style}>
                  {React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child) : null))}
                </div>
              </div>
            </>,
            targetElement,
          )
        ) : (
          <div className={overlayClasses} onClick={handleOverlayClick}>
            <div data-radius={radius} data-shadow={shadow} className={modalClasses} style={style}>
              {React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child) : null))}
            </div>
          </div>
        ))}
    </ModalContext.Provider>
  );
};

const Content: FC<ContentProps> = (props) => {
  const { className, style, children, title, subtitle } = props;

  const context = useContext(ModalContext);
  if (!context) throw new Error('Content must be used within Root');

  const { onClose } = context;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classNames(styles.content, className)} onClick={stopPropagation} style={style}>
      <Card size={'large'}>
        {(title || subtitle) && <Card.Header title={title} titleSize={'5'} subtitle={subtitle} outlined={false}></Card.Header>}
        <Card.Body content={children}></Card.Body>
      </Card>
    </div>
  );
};
const Action: FC<ActionProps> = (props) => {
  const { className, style, children, variant = 'close' } = props;

  const context = useContext(ModalContext);
  if (!context) throw new Error('Content must be used within Root');

  const { onClose, onCancel, onConfirm } = context;

  const handleActionClick = () => {
    switch (variant) {
      case 'close':
        handleCancel();
        break;
      case 'confirm':
        handleConfirm();
        break;
    }
  };

  const handleCancel = () => {
    onCancel && onCancel();
    onClose();
  };

  const handleConfirm = () => {
    onConfirm && onConfirm();
    onClose();
  };

  return (
    <div className={classNames(styles.action, className)} onClick={handleActionClick} style={style}>
      {children}
    </div>
  );
};

const Modal = {
  Root: Root,
  Content: Content,
  Action: Action,
};

export default Modal;
