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

const Root: FC<DrawerProps> = (props) => {
  const { className, style, children, open = false, width = 320, overlayVariant = 'transparent', outlined = true, placement = 'right', onClose, variant = 'default' } = props;

  const [isRendered, setIsRendered] = useState(false);
  const [isOpen, setIsOpen] = useState(open);
  const [targetElement, setTargetElement] = useState<Element | null>(null);

  const hasHeader = React.Children.toArray(children).some((child) => React.isValidElement(child) && child.type === Header);
  const hasFooter = React.Children.toArray(children).some((child) => React.isValidElement(child) && child.type === Footer);

  const overlayClasses = classNames(styles.overlay, styles[`overlay--${placement}`], styles[`overlay--${overlayVariant}`], {
    [styles.open]: isOpen,
    [styles.outlined]: outlined,
  });

  const drawerClasses = classNames(
    styles.drawer,
    styles[`drawer--${placement}`],
    {
      [styles.open]: isOpen,
      [styles.outlined]: outlined,
      [styles['has-header']]: hasHeader,
      [styles['has-footer']]: hasFooter,
    },
    className,
  );

  const handleOverlayClick = () => {
    if (variant === 'default') onClose && onClose();
  };

  useEffect(() => {
    // Instead of querying the DOM directly during the render,
    // move this to a useEffect to ensure it's only done client-side.
    setTargetElement(document.querySelector('.woozdesign'));
  }, [setTargetElement]);

  const handleClose = () => {
    if (open) {
      onClose && onClose(); // Call the onClose prop when closing the drawer
    } else {
      setIsRendered(true);
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

  return (
    <DrawerContext.Provider value={{ onClose: handleClose }}>
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

const Content: FC<ContentProps> = (props) => {
  const { className, style, children } = props;

  const classes = classNames(styles.content, className);

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classes} onClick={stopPropagation}>
      {children}
    </div>
  );
};

const Header: FC<HeaderProps> = (props) => {
  const { title, action } = props;

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

const Footer: FC<FooterProps> = (props) => {
  const { className, style, children } = props;

  const classes = classNames(styles.footer, className);

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classes} onClick={stopPropagation}>
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
