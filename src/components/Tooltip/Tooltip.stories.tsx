import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip from './Tooltip';
import Theme from '../Theme/Theme';
import Button from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<{ content: string; multiline?: boolean }> = (args) => (
  <Theme.ThemeProvider appearance="dark">
    <Tooltip {...args}>
      <Button>button</Button>
    </Tooltip>
  </Theme.ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Add the selected items to your library for usage within your dashboard.',
};
