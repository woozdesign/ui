import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProgressCircular from './ProgressCircular';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';

export default {
  title: 'Components/ProgressCircular',
  component: ProgressCircular,
} as Meta;

// ProgressCircular Story
const ProgressCircularTemplate: Story = (args) => (
  <ThemeProvider appearance={'dark'}>
    <ProgressCircular {...args} />
    <ProgressCircular indeterminate color="red" />
  </ThemeProvider>
);
export const Default = ProgressCircularTemplate.bind({});
Default.args = {};
