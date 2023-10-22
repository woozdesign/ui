import { BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp, SpaceProp } from '@/utils';
import React from 'react';

export interface ContainerProps extends BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp {}

export interface SectionProps extends BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp, SpaceProp {}
