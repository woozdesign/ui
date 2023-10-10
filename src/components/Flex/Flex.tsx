'use client';
import { SpaceSizeProp } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Flex.module.scss';

interface FlexProps extends SpaceSizeProp {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
  align: React.CSSProperties['alignItems'];
  justify: React.CSSProperties['justifyContent'];
  direction?: 'rows' | 'col';
  children: React.ReactNode;
}

const Flex: FC<FlexProps> = ({ children, direction, space = 2, width = 'fit-content', height = '100%', align = 'start', justify = 'start' }) => {
  const classes = classNames(styles[`box`], styles[`box--${direction}`], styles[`box--${space}`]);

  return (
    <div
      className={classes}
      style={{
        width: width,
        height: height,
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
