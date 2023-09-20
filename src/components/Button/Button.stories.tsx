import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Button' }, // Default content for the button across stories
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Theme.ThemeProvider>
    <Button {...args} />
  </Theme.ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: 'outlined',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'icon',
  iconPrepend: <span>🚀</span>, // just as an example icon
};

export const Link = Template.bind({});
Link.args = {
  href: 'https://example.com',
  children: 'Link Button',
};
