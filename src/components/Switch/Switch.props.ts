import { ColorProp, RadiusProp, SizeProp } from '@/utils';
import { FormChildProps } from '../Form/Form.props';
import React from 'react';

export interface SwitchProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'color' | 'size' | 'onChange'>, ColorProp, SizeProp, RadiusProp, FormChildProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
