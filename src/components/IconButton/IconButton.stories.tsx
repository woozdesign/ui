import { Meta, Story } from '@storybook/react';
import { Icon } from '@woozdesign/icons';
import React from 'react';
import { ThemeProvider } from '../Theme/Theme';
import IconButton, { IconButtonProps } from './IconButton';

import '@/styles/core.scss';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  args: { children: 'IconButton' }, // Default content for the button across stories
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
  <ThemeProvider appearance={'light'}>
    <IconButton {...args} />
  </ThemeProvider>
);

export const Solid = Template.bind({});

Solid.args = {
  variant: 'solid',
  children: <Icon type={'Search'} />,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: <Icon type={'Search'} />,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: <Icon type={'Search'} />,
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
  children: <Icon type={'Search'} />,
};

export const Translucent = Template.bind({});
Translucent.args = {
  variant: 'translucent',
  children: <Icon type={'Search'} />,
};
