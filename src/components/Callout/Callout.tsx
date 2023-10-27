import React from 'react';
import styles from './Callout.module.scss';
import { CalloutProps } from './Callout.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';

const Callout: React.FC<CalloutProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { className, style, children, variant = 'ghost', color, radius, size = 'medium', highContrast } = otherMarginProps;

  const classes = classNames(
    styles.callout,
    styles[`callout--${variant}`],
    className,
    { [styles['highContrast']]: highContrast },
    withMarginProps(marginProps),
    withBreakpoints(size, 'wd-callout', styles),
  );
  return (
    <div data-radius={radius} data-accent-color={color} className={classes}>
      {children}
    </div>
  );
};

export default Callout;
