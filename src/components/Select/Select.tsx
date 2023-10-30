import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import { useOutsideClick } from '@/utils/hooks/useOutsideClick';
import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import { ContentProps, ItemProps, RootProps, SelectContextProps, TriggerProps } from './Select.props';

const SelectContext = React.createContext<SelectContextProps | undefined>(undefined);

const Root: FC<RootProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, defaultValue, placeholder = '-', variant = 'outlined', highContrast, color, shadow = '4', radius, size = 'medium' } = otherMarginProps;

  const [selectedValue, setSelectedValue] = useState<string>(defaultValue ?? placeholder);
  const [selectedLabel, setSelectedLabel] = useState<string>(placeholder);

  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  const classes = classNames(
    styles.root,
    styles[`root--${variant}`],
    { [styles['highContrast']]: highContrast },
    withMarginProps(marginProps),
    withBreakpoints(size, 'wd-select', styles),
  );

  useEffect(() => {
    if (defaultValue) {
      React.Children.forEach(children, (contentChild) => {
        if (React.isValidElement<ContentProps>(contentChild) && contentChild.type === Content) {
          React.Children.forEach(contentChild.props.children, (itemChild) => {
            if (React.isValidElement<ItemProps>(itemChild) && itemChild.props.value === defaultValue) {
              setSelectedLabel(itemChild.props.children as string);
            }
          });
        }
      });
    }
  }, [defaultValue, children]);

  const handleToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useOutsideClick(rootRef, () => setIsOpen(false));

  return (
    <SelectContext.Provider value={{ selectedValue, setSelectedValue, selectedLabel, setSelectedLabel, isOpen, onToggle: handleToggle }}>
      <div data-radius={radius} data-shadow={shadow} data-accent-color={color} ref={rootRef} className={classes}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const Trigger: FC<TriggerProps> = () => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('SelectTrigger must be used within Root');

  // Get the handleToggle function from the Root context

  return (
    <div onClick={context.onToggle} className={styles.trigger}>
      {context.selectedLabel} <Icon type={context.isOpen ? 'ChevronUp' : 'ChevronDown'} />
    </div>
  );
};

const Content: FC<ContentProps> = (props) => {
  const { children, placement = 'bottom' } = props;
  const context = useContext(SelectContext);
  if (!context) throw new Error('Content must be used within Root');
  if (!context.isOpen) return null;

  return (
    <div data-placement={placement} className={styles.content}>
      {children}
    </div>
  );
};

const Item: FC<ItemProps> = (props) => {
  const { value, children } = props;
  const context = useContext(SelectContext);
  if (!context) throw new Error('Item must be used within Root');

  const classes = classNames(styles.item, { [styles['active']]: value == context.selectedValue });

  const handleClick = () => {
    context.setSelectedValue(value);
    context.setSelectedLabel(children as string); // Assuming children is always a string for simplicity
    context.onToggle();
  };

  return (
    <div onClick={handleClick} className={classes}>
      {children}
      {value == context.selectedValue && <Icon type={'Check'} size={'small'} />}
    </div>
  );
};

const Select = {
  Root: Root,
  Trigger: Trigger,
  Content: Content,
  Item: Item,
};

export default Select;