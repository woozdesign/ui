import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip from './Tooltip';
import { ThemeProvider } from '../Theme/Theme';
import Button from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<{ content: string; multiline?: boolean }> = (args) => (
  <ThemeProvider appearance="dark">
    <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button>button</Button>
      </Tooltip>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Add the selected items to your library for usage within your dashboard.',
};
