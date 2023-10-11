import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';
import { ThemeProvider } from '../Theme/Theme';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => (
  <ThemeProvider>
    <Badge {...args} />
  </ThemeProvider>
);

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  label: 'Solid',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  label: 'Ghost',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined',
};
