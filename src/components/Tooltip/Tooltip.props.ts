import { BasePropWithChildren } from '@/utils';
import React from 'react';

export interface TooltipProps extends BasePropWithChildren {
  label: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
