import React, { useState } from 'react';
import styles from './ExpansionPanel.module.scss';
import classNames from 'classnames';
import { Icon } from '@woozdesign/icons';
import { ColorProp, RadiusProp, extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import { ExpansionPanelProps } from './ExpansionPanel.props';

const ExpansionPanel: React.FC<ExpansionPanelProps> = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { color = 'gray', outlined = true, containerOutlined = true, size = 'medium', radius, items, multiple = false } = props;

  const panelClasses = classNames(styles.panelContainer, { [styles.outlined]: containerOutlined }, withMarginProps(marginProps));

  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices((prevIndices) => prevIndices.filter((i) => i !== index));
    } else {
      if (multiple) {
        setExpandedIndices((prevIndices) => [...prevIndices, index]);
      } else {
        setExpandedIndices([index]);
      }
    }
  };

  return (
    <div data-accent-color={color} data-radius={radius} className={panelClasses}>
      {items.map((item, index) => {
        const isExpanded = expandedIndices.includes(index);

        const itemClasses = classNames(styles.item, withBreakpoints(size, 'wd-expansion-items', styles), { [styles.expanded]: isExpanded, [styles.outlined]: outlined });
        const headerClasses = classNames(styles.header, withBreakpoints(size, 'wd-expansion-header', styles));

        const contentWrapperClasses = classNames(styles.contentWrapper, { [styles.expanded]: isExpanded });
        const contentClasses = classNames(styles.content, { [styles.expanded]: isExpanded, [styles.outlined]: outlined }, withBreakpoints(size, 'wd-expansion-content', styles));

        return (
          <div key={index} className={itemClasses}>
            <div className={headerClasses} onClick={() => toggleItem(index)}>
              {item.header}
              {isExpanded ? <Icon color={color} type="ChevronUp" /> : <Icon color={color} type="ChevronDown" />}
            </div>
            <div className={contentWrapperClasses}>
              <div className={contentClasses}>{item.children}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpansionPanel;
