import { Meta, Story } from '@storybook/react';
import { Icon } from '@woozdesign/icons';
import React from 'react';
import { ThemeProvider } from '../Theme/Theme';
import Button, { ButtonProps } from './Button';

import '@/styles/core.scss';

export default {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Button' }, // Default content for the button across stories
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider
    appearance="dark"
    colorToken={{
      light: {
        custom: {
          '9': '#ff0000',
        },
      },
      dark: {
        custom: {
          '9': '#00ff00',
        },
      },
    }}
  >
    <Button {...args} />
  </ThemeProvider>
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

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  iconPrepend: <Icon type={'Search'} />,
};

export const Transparent = Template.bind({});
Text.args = {
  variant: 'transparent',
  iconPrepend: <Icon type={'Search'} />,
};
export const Translucent = Template.bind({});
Text.args = {
  variant: 'translucent',
  iconPrepend: <Icon type={'Search'} />,
};

export const Link = Template.bind({});
Link.args = {
  href: 'https://example.com',
  children: 'Link Button',
};
