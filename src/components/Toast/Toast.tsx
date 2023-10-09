import React, { useState, useEffect, useRef } from 'react';
import styles from './Toast.module.scss';
import Card from '../Card';
import Button from '../Button';
import { Icon } from '@woozdesign/icons';
import { ColorProp, RadiusProp, combineClassNames } from '@/utils';
import Typography from '../Typography';
// ... (your imports remain unchanged)

export interface ToastProps extends ColorProp, RadiusProp {
  id: number; // Added id to identify each toast
  iconPrepend?: React.ReactNode;
  message: string;
  duration?: number;
  placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

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
      }, toast.duration ?? 3000);
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
    <div data-accent-color={toast.color} data-radius={toast.radius} className={combineClassNames(classes)} ref={toastRef}>
      {toast.iconPrepend && <span className={styles.icon}>{toast.iconPrepend}</span>}
      <Typography.Text color={toast.color} className={styles.text} size={4}>
        {toast.message}
      </Typography.Text>
      <div className={styles.action} onClick={handleSelfClose}>
        <Icon type="X" />
      </div>
    </div>
  );
};
const ToastList: React.FC<{ toasts: ToastProps[]; handleClose: (id: number) => void }> = ({ toasts, handleClose }) => {
  const groupedToasts = toasts.reduce<{ [key in ToastProps['placement']]: ToastProps[] }>(
    (acc, toast) => {
      const placement: ToastProps['placement'] = toast.placement || 'topLeft';

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
          {((groupedToasts[placement as keyof typeof groupedToasts] as ToastProps[]) ?? []).map((toast) => (
            <ToastDisplay key={toast.id} toast={toast} handleClose={handleClose} />
          ))}
        </div>
      ))}
    </>
  );
};

type ToastFunction = (props: Omit<ToastProps, 'id'>) => void;
type ToastHookReturnType = [ToastFunction, JSX.Element];
export const useToast = (): ToastHookReturnType => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const openToast = (props: Omit<ToastProps, 'id'>) => {
    const newToast = {
      ...props,
      id: Date.now(), // using timestamp for simplicity
    };
    setToasts([...toasts, newToast]);
  };

  const handleClose = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return [openToast, <ToastList key="toast-list" toasts={toasts} handleClose={handleClose} />];
};
