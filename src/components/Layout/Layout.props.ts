import { BasePropWithChildren, DisplayProp, LayoutProp, MarginProp, PaddingProp, SpaceProp } from '@/utils';
import React from 'react';

export interface LayoutComponentProps extends BasePropWithChildren, LayoutProp, DisplayProp, MarginProp, PaddingProp {}
