import React from 'react';
import { Meta, Story } from '@storybook/react';
import AutoComplete from './AutoComplete';
import { AutoCompleteProps } from './AutoComplete.props';
import '@/styles/core.scss';

import { ThemeProvider } from '../Theme/Theme';
import { Icon } from '@woozdesign/icons';
import Button from '../Button';
import Flex from '../Flex';
import Card from '../Card';

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => (
  <ThemeProvider>
    <AutoComplete {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = { suggestions: ['abc', 'abs'] };
