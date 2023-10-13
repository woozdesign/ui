'use client';
import classNames from 'classnames';
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import Button from '../Button';
import styles from './Drawer.module.scss';
import IconButton from '../IconButton';
import { Icon } from '@woozdesign/icons';
import Divider from '../Divider';

interface DrawerContextProps {
  onClose: () => void;
}

const DrawerContext = React.createContext<DrawerContextProps | undefined>(undefined);

interface DrawerProps {
  children: ReactNode;
  width?: React.CSSProperties['width'];
  placement?: 'left' | 'right';
  variant?: 'default' | 'confirm';
  outlined?: boolean;
  overlayVariant?: 'transparent' | 'translucent';
  onClose?: () => void;
}

const Root: FC<DrawerProps> = ({ children, width = 320, overlayVariant = 'transparent', outlined = true, placement = 'right', onClose, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const overlayClasses = classNames(styles.overlay, styles[`overlay--${placement}`], styles[`overlay--${overlayVariant}`], { [styles.open]: isOpen, [styles.outlined]: outlined });
  const drawerClasses = classNames(styles.drawer, styles[`drawer--${placement}`], { [styles.open]: isOpen, [styles.outlined]: outlined });

  const handleOverlayClick = () => {
    if (variant === 'default') handleClose();
  };

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
      onClose && onClose(); // Call the onClose prop when closing the drawer
    } else {
      setIsRendered(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 50); // delay to allow the drawer to render before applying the transition
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
    <DrawerContext.Provider value={{ onClose: handleClose }}>
      {React.Children.map(children, (child) => (React.isValidElement(child) && child.type === Trigger ? child : null))}

      {isRendered && (
        <div className={overlayClasses} onClick={handleOverlayClick}>
          <div className={drawerClasses} style={{ width: width }}>
            {React.Children.map(children, (child) => (React.isValidElement(child) && child.type !== Trigger ? React.cloneElement(child) : null))}
          </div>
        </div>
      )}
    </DrawerContext.Provider>
  );
};

interface TriggerProps {
  children: ReactNode;
}

const Trigger: FC<TriggerProps> = ({ children }) => {
  const context = useContext(DrawerContext);

  if (!context) throw new Error('Trigger must be used within Root');

  return (
    <div className={styles.trigger} onClick={context.onClose}>
      {children}
    </div>
  );
};

interface ContentProps {
  title?: ReactNode;
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ title, children }) => {
  const context = useContext(DrawerContext);

  if (!context) throw new Error('Content must be used within Root');

  const { onClose } = context;

  const handleClose = () => {
    onClose();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.content} onClick={stopPropagation}>
      <div className={styles[`content--header`]}>
        <div className={styles[`header-title`]}>{title}</div>
        <div className={styles[`header-action`]}>
          <IconButton variant={'outlined'} color={'gray'} onClick={handleClose}>
            <Icon type={'X'} />
          </IconButton>
        </div>
      </div>
      <div className={styles[`content--body`]}>{children}</div>
    </div>
  );
};

const Drawer = {
  Root: Root,
  Trigger: Trigger,
  Content: Content,
};

export default Drawer;
