import React, { useState, useEffect, useRef } from 'react';
import styles from './Toast.module.scss';
import Card from '../Card';
import Button from '../Button';
import { Icon } from '@woozdesign/icons';
import { combineClassNames } from '@/utils';

type ToastProps = {
  message: string;
  description: string;
  duration?: number;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
};

interface ToastDisplayProps {
  toast: ToastProps | null;
  isOpen: boolean;
  handleClose: () => void;
}

const ToastDisplay = React.forwardRef<HTMLDivElement, ToastDisplayProps>((props, ref) => {
  const { toast, isOpen, handleClose } = props;
  const classes = [styles.toast, styles[toast?.placement || 'topLeft'], isOpen ? styles.open : ''];

  return (
    <div className={combineClassNames(classes)} ref={ref}>
      {toast && (
        <Card>
          <Card.Heading
            outlined={false}
            title={toast.message}
            subtitle={toast.description}
            action={
              <Button variant="icon" onClick={handleClose}>
                <Icon type="X" />
              </Button>
            }
          />
        </Card>
      )}
    </div>
  );
});
ToastDisplay.displayName = 'ToastDisplay';
export const useToast = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const toastRef = useRef<HTMLDivElement>(null);

  const open = (props: ToastProps) => {
    setToast(props);
    setIsRendered(true);
  };

  useEffect(() => {
    if (toastRef.current && isRendered) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isRendered]);

  useEffect(() => {
    if (!isOpen && isRendered) {
      const timer = setTimeout(() => {
        setIsRendered(false);
        setToast(null);
      }, 400); // Give the toast time to "fadeOut"
      return () => clearTimeout(timer);
    }
  }, [isOpen, isRendered]);

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsRendered(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 50); // delay to allow the modal to render before applying the transition
    }
  };

  return [open, <ToastDisplay key="toast-display" ref={toastRef} toast={toast} isOpen={isOpen} handleClose={handleClose} />];
};
