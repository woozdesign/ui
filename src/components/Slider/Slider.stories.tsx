import React from 'react';
import { Meta, Story } from '@storybook/react';
import Slider, { SliderProps } from './Slider';
import { ThemeProvider } from '../Theme/Theme';

export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <ThemeProvider appearance={'dark'}>
    <div style={{ height: '200px' }}>
      <Slider {...args} />
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: [25, 75],
};

export const SingleValue = Template.bind({});
SingleValue.args = {
  defaultValue: [50],
};

export const Vertical = Template.bind({});
Vertical.args = {
  defaultValue: [50],
  orientation: 'vertical',
  radius: 'full',
};
