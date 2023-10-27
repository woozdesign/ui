import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RadioGroup, { RadioGroupProps } from './RadioGroup';
import { ThemeProvider } from '../Theme';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {},
} as Meta;

const Template: Story<RadioGroupProps> = (args) => (
  <ThemeProvider>
    <RadioGroup {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'exampleGroup',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  defaultValue: 'option2',
};
