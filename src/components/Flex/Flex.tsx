'use client';
import { SpaceSizeProp } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Flex.module.scss';

interface FlexProps extends SpaceSizeProp {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  direction?: 'row' | 'column';
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

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
