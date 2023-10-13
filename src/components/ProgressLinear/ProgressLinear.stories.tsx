import { Meta, Story } from '@storybook/react';
import React from 'react';

import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';
import ProgressLinear from './ProgressLinear';

export default {
  title: 'Components/ProgressLinear',
  component: ProgressLinear,
} as Meta;

// ProgressLinear Story
const ProgressLinearTemplate: Story = (args) => (
  <ThemeProvider appearance={'light'}>
    <ProgressLinear {...args} />

    {/* <ProgressLinear indeterminate color="red" /> */}
  </ThemeProvider>
);
export const Default = ProgressLinearTemplate.bind({});
Default.args = {};
