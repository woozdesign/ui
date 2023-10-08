import React from 'react';
import { Meta, Story } from '@storybook/react';
import Kbd, { KbdProps } from './Kbd';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/Kbd',
  component: Kbd,
} as Meta;

const Template: Story<KbdProps> = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <Kbd shortcut={['Ctrl', 'Command']} {...args}></Kbd>
  </Theme.ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
