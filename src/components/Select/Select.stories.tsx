import React from 'react';
import { Meta, Story } from '@storybook/react';
import Select, { SelectProps } from './Select';
import { ThemeProvider } from '../Theme/Theme';
import '@/styles/core.scss';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <ThemeProvider appearance={'light'}>
    <Select.Root {...args}>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Apple',
  variant: 'outlined',
  size: 'medium',
};
