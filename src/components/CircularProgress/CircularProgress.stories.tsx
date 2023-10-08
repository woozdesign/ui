import React from 'react';
import { Meta, Story } from '@storybook/react';
import CircularProgress from './CircularProgress';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/CircularProgress',
  component: CircularProgress,
} as Meta;

// CircularProgress Story
const CircularProgressTemplate: Story = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <CircularProgress {...args} />
    <CircularProgress indeterminate color="red" />
  </Theme.ThemeProvider>
);
export const Default = CircularProgressTemplate.bind({});
Default.args = {};
