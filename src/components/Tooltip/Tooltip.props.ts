import { BasePropWithChildren } from '@/utils';
import React from 'react';

export interface TooltipProps extends BasePropWithChildren {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}
