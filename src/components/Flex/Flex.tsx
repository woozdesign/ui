'use client';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Flex.module.scss';
import { FlexProps } from './Flex.props';

const Flex: FC<FlexProps> = ({ className, style, children, direction = 'row', space = 2, width = '100%', height = '100%', align = 'start', justify = 'start' }) => {
  const classes = classNames(styles[`box`], styles[`box--${direction}`], styles[`box--${space}`], className);

  return (
    <div
      className={classes}
      style={{
        width: width,
        height: height,
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
