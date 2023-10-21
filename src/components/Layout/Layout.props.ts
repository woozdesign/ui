import { SpaceProp } from '@/utils';
import React from 'react';

export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  // className?: string;
  children: React.ReactNode;
  padding?: React.CSSProperties['padding'];
  maxWidth?: React.CSSProperties['maxWidth'];
}

export interface SectionProps extends SpaceProp {
  children: React.ReactNode;
  className?: string;
  padding?: React.CSSProperties['padding'];
  style?: React.CSSProperties;
}
