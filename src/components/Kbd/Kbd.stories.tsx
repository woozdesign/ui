import React from 'react';
import { Meta, Story } from '@storybook/react';
import Kbd, { KbdProps } from './Kbd';
import { ThemeProvider } from '../Theme/Theme';

export default {
  title: 'Components/Kbd',
  component: Kbd,
} as Meta;

const Template: Story<KbdProps> = (args) => (
  <ThemeProvider appearance={'light'}>
    <Kbd shortcut={['Ctrl', 'Command']} {...args}></Kbd>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
