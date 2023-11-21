import React from 'react';
import { Meta, Story } from '@storybook/react';
import AutoComplete, { TextFieldProps } from './AutoComplete';
import '@/styles/core.scss';

import { ThemeProvider } from '../Theme/Theme';
import { Icon } from '@woozdesign/icons';
import Button from '../Button';
import Flex from '../Flex';
import Card from '../Card';

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  args: {},
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <ThemeProvider>
    <Flex align="center">
      <Card>
        <AutoComplete {...args} />
      </Card>
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = { suggestions: ['abc', 'abs'] };
