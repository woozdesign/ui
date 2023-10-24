'use client';
import { ShortcutProvider } from '@/utils/contexts/Shortcut/ShortcutProvider';
import { useShortcut } from '@/utils/hooks/useShortcut';
import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { FC, RefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Divider from '../Divider';
import Kbd from '../Kbd';
import styles from './DropdownMenu.module.scss';
import { ContentProps, DropdownMenuContextProps, DropdownMenuProps, ItemProps, SubContentProps, SubProps, SubTriggerProps, TriggerProps } from './DropdownMenu.props';

const isBrowser = typeof window !== 'undefined';

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    if (!isBrowser) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

const DropdownMenuContext = React.createContext<DropdownMenuContextProps | undefined>(undefined);

const Root: FC<DropdownMenuProps> = (props) => {
  const { className, style, children, shadow = 1 } = props;
  const classes = classNames(styles.root, className);

  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  const handleToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useOutsideClick(rootRef, () => setIsOpen(false));

  return (
    <ShortcutProvider>
      <div data-shadow={shadow} ref={rootRef} className={classes}>
        <DropdownMenuContext.Provider value={{ onToggle: handleToggle }}>
          {React.Children.map(children, (child) => {
            // Check if child is a valid React element
            if (React.isValidElement<DropdownMenuProps>(child)) {
              // Spread the isOpen prop onto the child element
              return React.cloneElement(child, { isOpen });
            }
            return child;
          })}
        </DropdownMenuContext.Provider>
      </div>
    </ShortcutProvider>
  );
};

const Trigger: FC<TriggerProps> = (props) => {
  const { className, style, children, shortcut } = props;

  const classes = classNames(styles.trigger, className);

  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('Trigger must be used within Root');

  useShortcut(shortcut ?? [], context.onToggle);

  return (
    <div className={classes} onClick={context.onToggle}>
      {children}
    </div>
  );
};

const Content: FC<ContentProps> = (props) => {
  const { className, style, children, isOpen } = props;
  if (!isOpen) return null;

  return <div className={styles.content}>{children}</div>;
};

const Item: FC<ItemProps> = ({ children, shortcut, color, disabled, onClick }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  useShortcut(shortcut ?? [], handleClick);

  return (
    <div className={`${styles.item} ${disabled ? styles.disabled : ''}`} data-accent-color={color} onClick={handleClick}>
      {children}
      {shortcut && <Kbd variant={'solid'} size={'small'} shortcut={shortcut}></Kbd>}
    </div>
  );
};

const Separator: FC = () => {
  return <Divider color="gray"></Divider>;
};

const Sub: FC<SubProps> = (props) => {
  const { className, style, children } = props;

  const classes = classNames(styles.sub, className);

  const [isSubOpen, setIsSubOpen] = useState(false);
  const subRef = useRef(null);
  const closeTimeout = useRef<number | null>(null); // Store the timeout ID

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current); // Clear the timeout if re-entering
    }
    setIsSubOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = window.setTimeout(() => {
      setIsSubOpen(false);
    }, 300); // 300ms delay before closing
  };

  const handleToggle = useCallback(() => {
    setIsSubOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <div ref={subRef} className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownMenuContext.Provider value={{ onToggle: handleToggle }}>
        {React.Children.map(children, (child) => React.cloneElement(child as React.ReactElement, { isSubOpen }))}
      </DropdownMenuContext.Provider>
    </div>
  );
};
const SubTrigger: FC<SubTriggerProps> = (props) => {
  const { className, style, children, shortcut } = props;

  const classes = classNames(styles.subTrigger, className);

  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('SubTrigger must be used within Sub');

  useShortcut(shortcut ?? [], context.onToggle);

  return (
    <div className={classes}>
      {children}

      <Icon type={'ChevronRight'} />
    </div>
  );
};
const SubContent: FC<SubContentProps> = (props) => {
  const { className, style, children, isSubOpen } = props;

  const classes = classNames(styles.subContent, className);

  if (!isSubOpen) return null;

  return <div className={classes}>{children}</div>;
};

const DropdownMenu = {
  Root: Root,
  Trigger: Trigger,
  Content: Content,
  Item: Item,
  Separator: Separator,
  Sub: Sub,
  SubTrigger: SubTrigger,
  SubContent: SubContent,
};

export default DropdownMenu;
