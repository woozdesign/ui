// Switch.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';
import { ThemeProvider } from '../Theme/Theme';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => (
  <ThemeProvider>
    <Switch {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
