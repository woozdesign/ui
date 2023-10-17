'use client';
import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { FC, useContext, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import IconButton from '../IconButton';
import styles from './Drawer.module.scss';
import { ContentProps, DrawerProps, FooterProps, HeaderProps } from './Drawer.props';
interface DrawerContextProps {
  onClose: () => void;
}

const DrawerContext = React.createContext<DrawerContextProps | undefined>(undefined);

const Root: FC<DrawerProps> = ({ children, isOpen = false, width = 320, overlayVariant = 'transparent', outlined = true, placement = 'right', onClose, variant = 'default' }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [openState, setOpenState] = useState(isOpen);
  const [targetElement, setTargetElement] = useState<Element | null>(null);

  const hasHeader = React.Children.toArray(children).some((child) => React.isValidElement(child) && child.type === Header);
  const hasFooter = React.Children.toArray(children).some((child) => React.isValidElement(child) && child.type === Footer);

  const overlayClasses = classNames(styles.overlay, styles[`overlay--${placement}`], styles[`overlay--${overlayVariant}`], {
    [styles.open]: openState,
    [styles.outlined]: outlined,
  });

  const drawerClasses = classNames(styles.drawer, styles[`drawer--${placement}`], {
    [styles.open]: openState,
    [styles.outlined]: outlined,
    [styles['has-header']]: hasHeader,
    [styles['has-footer']]: hasFooter,
  });

  const handleOverlayClick = () => {
    if (variant === 'default') onClose && onClose();
  };

  useEffect(() => {
    // Instead of querying the DOM directly during the render,
    // move this to a useEffect to ensure it's only done client-side.
    setTargetElement(document.querySelector('.woozdesign'));
  }, [setTargetElement]);

  const handleClose = () => {
    if (isOpen) {
      onClose && onClose(); // Call the onClose prop when closing the drawer
    } else {
      setIsRendered(true);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setOpenState(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 200); // delay to allow the transition to complete before unmounting
      return () => clearTimeout(timer);
    } else {
      setIsRendered(true);
      const timer = setTimeout(() => {
        setOpenState(true);
      }, 50);
    }
  }, [isOpen]);

  return (
    <DrawerContext.Provider value={{ onClose: handleClose }}>
      {/* {React.Children.map(children, (child) => (React.isValidElement(child) && child.type === Trigger ? child : null))} */}

      {isRendered &&
        (targetElement ? (
          ReactDom.createPortal(
            <>
              <div className={overlayClasses} onClick={handleOverlayClick}>
                <div className={drawerClasses} style={{ width: width }}>
                  {/* {React.Children.map(children, (child) => (React.isValidElement(child) && child.type !== Trigger ? React.cloneElement(child) : null))} */}
                  {React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child) : null))}
                </div>
              </div>
            </>,
            targetElement,
          )
        ) : (
          <div className={overlayClasses} onClick={handleOverlayClick}>
            <div className={drawerClasses} style={{ width: width }}>
              {React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child) : null))}
            </div>
          </div>
        ))}
    </DrawerContext.Provider>
  );
};

const Content: FC<ContentProps> = ({ children }) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.content} onClick={stopPropagation}>
      {children}
    </div>
  );
};

const Header: FC<HeaderProps> = ({ title, action }) => {
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
    <div className={styles.header} onClick={stopPropagation}>
      <div className={styles[`header-title`]}>{title}</div>
      <div className={styles[`header-action`]}>
        {action ?? (
          <IconButton variant={'outlined'} color={'gray'} onClick={handleClose}>
            <Icon type={'X'} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

const Footer: FC<FooterProps> = ({ children }) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.footer} onClick={stopPropagation}>
      {children}
    </div>
  );
};
const Drawer = {
  Root: Root,
  Content: Content,
  Header: Header,
  Footer: Footer,
};

export default Drawer;
