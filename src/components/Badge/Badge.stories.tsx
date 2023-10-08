import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => (
  <Theme.ThemeProvider>
    <Badge {...args} />
  </Theme.ThemeProvider>
);

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  label: 'Solid',
};

export const Soft = Template.bind({});
Soft.args = {
  variant: 'soft',
  label: 'Soft',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined',
};
