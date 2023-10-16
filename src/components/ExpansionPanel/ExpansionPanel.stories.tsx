import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ThemeProvider } from '../Theme';
import ExpansionPanel, { ExpansionPanelProps } from './ExpansionPanel';

export default {
  title: 'Components/ExpansionPanel',
  component: ExpansionPanel,
} as Meta;

const Template: Story<ExpansionPanelProps> = (args) => (
  <ThemeProvider>
    <ExpansionPanel {...args} />
  </ThemeProvider>
);

export const SingleExpansion = Template.bind({});
SingleExpansion.args = {
  items: [
    {
      header: 'Panel 1',
      children: <div>This is the content for Panel 1.</div>,
    },
    {
      header: 'Panel 2',
      children: <div>This is the content for Panel 2.</div>,
    },
  ],
  multiple: false,
};

export const MultipleExpansion = Template.bind({});
MultipleExpansion.args = {
  ...SingleExpansion.args,
  multiple: true,
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  items: [
    {
      header: 'Panel 1',
      children: <div>This is the content for Panel 1.</div>,
    },
    {
      header: 'Panel 2',
      children: <div>This is the content for Panel 2.</div>,
    },
    {
      header: 'Panel 3',
      children: <div>This is the content for Panel 3.</div>,
    },
    {
      header: 'Panel 4',
      children: <div>This is the content for Panel 4.</div>,
    },
  ],
  multiple: true,
};
