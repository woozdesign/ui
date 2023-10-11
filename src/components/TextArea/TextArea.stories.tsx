import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextArea, { TextAreaProps } from './TextArea';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    size: 'medium',
    label: 'Default Label',
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => (
  <ThemeProvider>
    <TextArea {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: undefined,
};

// ...add more stories as needed
