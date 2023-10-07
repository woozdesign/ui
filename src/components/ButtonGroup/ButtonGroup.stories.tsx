// ButtonGroup.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import Button from '../Button';
import '@/styles/core.scss';
import Theme from '../Theme';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <Theme.ThemeProvider>
    <ButtonGroup {...args}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="text">Tertiary</Button>
    </ButtonGroup>
  </Theme.ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const SmallSpacing = Template.bind({});
SmallSpacing.args = {
  spacing: 'small',
};

export const MediumSpacing = Template.bind({});
MediumSpacing.args = {
  spacing: 'medium',
};

export const LargeSpacing = Template.bind({});
LargeSpacing.args = {
  spacing: 'large',
};
