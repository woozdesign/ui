'use client';
import { ShortcutProvider } from '@/utils/contexts/Shortcut/ShortcutProvider';
import { useOutsideClick } from '@/utils/hooks/useOutsideClick';
import { useShortcut } from '@/utils/hooks/useShortcut';
import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useContext, useRef, useState } from 'react';
import Divider from '../Divider';
import Kbd from '../Kbd';
import styles from './DropdownMenu.module.scss';
import { ContentProps, DropdownMenuContextProps, DropdownMenuProps, ItemProps, SubContentProps, SubProps, SubTriggerProps, TriggerProps } from './DropdownMenu.props';
import { useTransitionState } from '@/utils';

const DropdownMenuContext = React.createContext<DropdownMenuContextProps | undefined>(undefined);

const Root: FC<DropdownMenuProps> = (props) => {
  const { className, style, children } = props;
  const classes = classNames(styles.root, className);

  const [open, setOpen] = useState(false);

  const [isOpen, isRendered] = useTransitionState(open, 200);
  const rootRef = useRef(null);

  const handleToggle = useCallback(() => {
    setOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useOutsideClick(rootRef, () => setOpen(false));

  return (
    <ShortcutProvider>
      <div ref={rootRef} className={classes} style={style}>
        <DropdownMenuContext.Provider value={{ onToggle: handleToggle, open: open, isOpen: isOpen, isRendered }}>{children}</DropdownMenuContext.Provider>
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
    <div className={classes} onClick={context.onToggle} style={style}>
      {children}
    </div>
  );
};

const Content: FC<ContentProps> = (props) => {
  const { className, items, style, children, shadow = '4', borderWidth, placement = 'bottom' } = props;
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('Content must be used within Root');

  if (!context) return null;

  const classes = classNames(styles.content, className, { [styles.open]: context.isOpen });

  return (
    context.isRendered && (
      <div data-placement={placement} data-shadow={shadow} data-border-width={borderWidth} className={classes} style={style}>
        {items.map((item, index) => {
          switch (item.variant) {
            case 'separator':
              return <Separator key={'separator' + index} />;

            default:
              if (item.children && item.children.length > 0) {
                return (
                  <Sub key={`${item.variant}_${item.label}_${index}`}>
                    <SubTrigger key={`sub_trigger_${item.label}_${index}`} shortcut={item.shortcut}>
                      {item.label}
                    </SubTrigger>
                    <SubContent key={`sub_${item.variant}_${item.label}_${index}`}>
                      {item.children.map((childrenItem, index) => {
                        switch (childrenItem.variant) {
                          case 'separator':
                            return <Separator key={'sub_separator' + index} />;

                          default:
                            return <Item key={`sub_${childrenItem.variant}_${childrenItem.label}_${index}`} {...childrenItem} />;
                        }
                      })}
                    </SubContent>
                  </Sub>
                );
              } else {
                return <Item key={`${item.variant}_${item.label}_${index}`} {...item} />;
              }
          }
        })}
      </div>
    )
  );
};

const Item: FC<ItemProps> = (props) => {
  const { label, children, shortcut, color, disabled, onClick } = props as Extract<ItemProps, { variant: 'item' }>;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  useShortcut(shortcut ?? [], handleClick);

  return (
    <div className={`${styles.item} ${disabled ? styles.disabled : ''}`} data-accent-color={color} onClick={handleClick}>
      {label}
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

  const [isOpen, isRendered] = useTransitionState(isSubOpen, 200);

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
    }, 200); // 300ms delay before closing
  };

  const handleToggle = useCallback(() => {
    setIsSubOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <div ref={subRef} className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
      <DropdownMenuContext.Provider value={{ onToggle: handleToggle, open: isSubOpen, isOpen: isOpen, isRendered: isRendered }}>{children}</DropdownMenuContext.Provider>
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
    <div className={classes} style={style}>
      {children}
      <Icon type={'ChevronRight'} />
    </div>
  );
};
const SubContent: FC<SubContentProps> = (props) => {
  const { className, style, children } = props;
  const context = useContext(DropdownMenuContext);
  if (!context) return null;

  const classes = classNames(styles.subContent, className, { [styles['open']]: context.isOpen });

  return (
    context.isRendered && (
      <div className={classes} style={style}>
        {children}
      </div>
    )
  );
};

const DropdownMenu = {
  Root: Root,
  Trigger: Trigger,
  Content: Content,
};

export default DropdownMenu;
