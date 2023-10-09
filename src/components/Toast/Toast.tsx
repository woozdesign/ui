import React, { useState, useEffect, useRef } from 'react';
import styles from './Toast.module.scss';
import Card from '../Card';
import Button from '../Button';
import { Icon } from '@woozdesign/icons';
import { combineClassNames } from '@/utils';
import Typography from '../Typography';
// ... (your imports remain unchanged)

type ToastProps = {
  id: number; // Added id to identify each toast
  message: string;
  // description: string;
  duration?: number;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
};

interface ToastDisplayProps {
  toast: ToastProps;
  handleClose: (id: number) => void;
}

const ToastDisplay: React.FC<ToastDisplayProps> = ({ toast, handleClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (toastRef.current) {
      const timer = setTimeout(() => {
        handleSelfClose();
      }, toast.duration ?? 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelfClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      handleClose(toast.id);
    }, 400); // delay to allow the toast to fade out before removal
  };

  const classes = [styles.toast, styles[toast.placement || 'topLeft'], isOpen ? styles.open : ''];

  return (
    <div className={combineClassNames(classes)} ref={toastRef}>
      <Card size={'small'}>
        <Card.Heading
          outlined={false}
          titleSize={3}
          title={<Typography.Text>{toast.message}</Typography.Text>}
          // subtitle={toast.description}
          action={
            <Button variant="icon" onClick={handleSelfClose}>
              <Icon type="X" />
            </Button>
          }
        />
      </Card>
    </div>
  );
};
const ToastList: React.FC<{ toasts: ToastProps[]; handleClose: (id: number) => void }> = ({ toasts, handleClose }) => {
  const groupedToasts = toasts.reduce<{ [key in ToastProps['placement']]: ToastProps[] }>(
    (acc, toast) => {
      const placement = toast.placement || 'topLeft';
      if (!acc[placement]) acc[placement] = [];
      acc[placement].push(toast);
      return acc;
    },
    {
      topLeft: [],
      topRight: [],
      bottomLeft: [],
      bottomRight: [],
    },
  );

  return (
    <>
      {['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((placement) => (
        <div key={placement} className={`${styles.toastContainer} ${styles[placement]}`}>
          {groupedToasts[placement].map((toast) => (
            <ToastDisplay key={toast.id} toast={toast} handleClose={handleClose} />
          ))}
        </div>
      ))}
    </>
  );
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const open = (props: Omit<ToastProps, 'id'>) => {
    const newToast = {
      ...props,
      id: Date.now(), // using timestamp for simplicity
    };
    setToasts([...toasts, newToast]);
  };

  const handleClose = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return [open, <ToastList key="toast-list" toasts={toasts} handleClose={handleClose} />];
};
