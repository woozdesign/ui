import React from 'react';
import { Meta, Story } from '@storybook/react';
import Divider, { DividerProps } from './Divider';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args) => (
  <Theme.ThemeProvider>
    {' '}
    <Divider {...args} />
  </Theme.ThemeProvider>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};
