import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProgressCircular from './ProgressCircular';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/ProgressCircular',
  component: ProgressCircular,
} as Meta;

// ProgressCircular Story
const ProgressCircularTemplate: Story = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <ProgressCircular {...args} />
    <ProgressCircular indeterminate color="red" />
  </Theme.ThemeProvider>
);
export const Default = ProgressCircularTemplate.bind({});
Default.args = {};
