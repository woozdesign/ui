import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tab, { RootProps as TabProps, TriggerProps } from './Tab';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';

export default {
  title: 'Components/Tab',
  component: Tab.Root,
  args: {},
} as Meta;

interface StoryProps extends TabProps {
  triggerHighContrast?: boolean;
  triggerSize?: 'small' | 'medium' | 'large' | 'xlarge';
}

const Template: Story<StoryProps> = (args) => (
  <ThemeProvider>
    <Tab.Root defaultValue="account" {...args}>
      <Tab.List>
        <Tab.Trigger color={'gray'} highContrast={args.triggerHighContrast} size={args.triggerSize} value="account">
          Account
        </Tab.Trigger>
        <Tab.Trigger highContrast={args.triggerHighContrast} size={args.triggerSize} value="documents">
          Documents
        </Tab.Trigger>
        <Tab.Trigger highContrast={args.triggerHighContrast} size={args.triggerSize} value="settings">
          Settings
        </Tab.Trigger>
      </Tab.List>

      <div style={{ padding: '10px 15px' }}>
        <Tab.Content value="account">
          <p>Make changes to your account.</p>
        </Tab.Content>
        <Tab.Content value="documents">
          <p>Access and update your documents.</p>
        </Tab.Content>
        <Tab.Content value="settings">
          <p>Edit your profile or update contact information.</p>
        </Tab.Content>
      </div>
    </Tab.Root>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  triggerHighContrast: false,
};
