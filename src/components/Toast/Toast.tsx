import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Typography from '../Typography';
import styles from './Toast.module.scss';
import { ToastDisplayProps, ToastProps } from './Toast.props';

const ToastDisplay: React.FC<ToastDisplayProps> = (props) => {
  const { toast, handleClose } = props;

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

  const classes = classNames(styles.toast, styles[`toast--${toast.variant || 'ghost'}`], styles[toast.placement || 'bottomRight'], {
    [styles.open]: isOpen,
    [styles[`highContrast`]]: toast.highContrast,
  });

  return (
    <div data-accent-color={toast.color} data-radius={toast.radius} className={classes} ref={toastRef}>
      {toast.iconPrepend && <span className={styles.icon}>{toast.iconPrepend}</span>}
      <Typography.Text color={toast.color} className={styles.text} size={'4'}>
        {toast.message}
      </Typography.Text>
      <div className={styles.action} onClick={handleSelfClose}>
        <Icon type="X" />
      </div>
    </div>
  );
};
const ToastList: React.FC<{ toasts: ToastProps[]; handleClose: (id: number) => void }> = (props) => {
  const { toasts, handleClose } = props;

  const groupedToasts = toasts.reduce<{ [key in ToastProps['placement']]: ToastProps[] }>(
    (acc, toast) => {
      const placement: ToastProps['placement'] = toast.placement || 'bottomRight';

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
type ToastHookReturnValue = [ToastFunction, React.ReactNode];
export const useToast = (): ToastHookReturnValue => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const openToast: ToastFunction = (props) => {
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
