import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box, { BoxProps } from './Box';
import Button from '../Button';
import { ThemeProvider } from '../Theme/Theme';
import Typography from '../Typography/Typography';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <ThemeProvider scaling="110%">
    <Box {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  style: { backgroundColor: 'red' },
  width: '12',
  height: '12',
  ml: { xs: '12', md: '5' },
};
