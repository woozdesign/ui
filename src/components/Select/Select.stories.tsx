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
      <Select.Trigger highContrast={true} />
      <Select.Content
        items={[
          {
            value: 'apple',
            label: 'Apple',
          },
          {
            value: 'orange',
            label: 'Orange',
          },
        ]}
      />
    </Select.Root>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Apple',
  variant: 'outlined',
  size: 'medium',
  highContrast: true,
};
