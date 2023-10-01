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

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined',
};
