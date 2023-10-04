import React, { FC, ReactNode, useState, useContext, useRef, useEffect, RefObject } from 'react';
import styles from './DropdownMenu.module.scss';
import Divider from '../Divider';
import Kbd from '../Kbd';
import { useShortcut } from '@/utils/hooks/useShortcut';
import { ShortcutProvider } from '@/utils/contexts/Shortcut/ShortcutProvider';
import { WoozCommandCode } from '@/utils/contexts/Shortcut/Shortcut.props';

interface DropdownMenuContextProps {
  onToggle: () => void;
}
const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
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

interface DropdownMenuProps extends ChildProps {
  children: ReactNode;
}

interface ChildProps {
  isOpen?: boolean;
}

const Root: FC<DropdownMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(rootRef, () => setIsOpen(false));

  return (
    <ShortcutProvider>
      <div ref={rootRef} className={styles.root}>
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

interface TriggerProps {
  children: ReactNode;
}

const Trigger: FC<TriggerProps> = ({ children }) => {
  const context = useContext(DropdownMenuContext);

  if (!context) throw new Error('Trigger must be used within Root');

  return (
    <div className={styles.trigger} onClick={context.onToggle}>
      {children}
    </div>
  );
};

interface ContentProps {
  children: ReactNode;
  isOpen: boolean;
}

const Content: FC<ContentProps> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return <div className={styles.content}>{children}</div>;
};

interface ItemProps {
  children: ReactNode;
  shortcut?: WoozCommandCode[];
  color?: string;
  onClick?: () => void; // Add onClick prop
  disabled?: boolean; // Add disabled prop
}

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
      {shortcut && <Kbd>{shortcut.join('+').toString()}</Kbd>}
    </div>
  );
};

const Separator: FC = () => {
  return <Divider></Divider>;
};

interface SubProps {
  children: ReactNode;
}
const Sub: FC<SubProps> = ({ children }) => {
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
  return (
    <div ref={subRef} className={styles.sub} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownMenuContext.Provider value={{ onToggle: () => {} }}>
        {React.Children.map(children, (child) => React.cloneElement(child as React.ReactElement, { isSubOpen }))}
      </DropdownMenuContext.Provider>
    </div>
  );
};

interface SubTriggerProps {
  children: ReactNode;
}
const SubTrigger: FC<SubTriggerProps> = ({ children }) => {
  const context = useContext(DropdownMenuContext);

  if (!context) throw new Error('SubTrigger must be used within Sub');

  return (
    <div className={styles.subTrigger} onMouseEnter={context.onToggle} onMouseLeave={context.onToggle}>
      {children}
    </div>
  );
};
interface SubContentProps {
  children: ReactNode;
  isSubOpen: boolean;
}

const SubContent: FC<SubContentProps> = ({ children, isSubOpen }) => {
  if (!isSubOpen) return null;

  return <div className={styles.subContent}>{children}</div>;
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
