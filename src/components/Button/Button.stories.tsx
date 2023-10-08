import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import Theme from '../Theme/Theme';
import { Icon } from '@woozdesign/icons';

import '@/styles/core.scss';

export default {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Button' }, // Default content for the button across stories
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Theme.ThemeProvider appearance="light">
    <Button {...args} />
  </Theme.ThemeProvider>
);

export const Solid = Template.bind({});

Solid.args = {
  variant: 'solid',
  iconPrepend: <Icon type={'Search'} />,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  iconPrepend: <Icon type={'Search'} />,
};

export const Soft = Template.bind({});
Soft.args = {
  variant: 'soft',
  iconPrepend: <Icon type={'Search'} />,
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  iconPrepend: <Icon type={'Search'} />,
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: 'icon',
  children: undefined,
  iconPrepend: <Icon type={'Search'} />, // just as an example icon
};

export const Link = Template.bind({});
Link.args = {
  href: 'https://example.com',
  children: 'Link Button',
};
