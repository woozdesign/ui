import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tab, { RootProps as TabProps, TriggerProps } from './Tab';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';
import Card from '../Card';

import { Col, Row } from '../Grid';

export default {
  title: 'Components/Tab',
  component: Tab.Trigger,
  args: {},
} as Meta;

interface StoryProps extends TabProps {
  triggerHighContrast?: boolean;
}

const Template: Story<StoryProps> = (args) => (
  <ThemeProvider>
    <Row>
      <Col xs="8">
        <Card variant={'transparent'}>
          <Tab.Root id="test-1" defaultValue="settings" {...args}>
            <Tab.List>
              <Tab.Trigger {...args} value="account">
                Account
              </Tab.Trigger>
              <Tab.Trigger {...args} value="documents">
                Documents
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settings">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settings1">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="setting2s">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settin3gs">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settin4gs">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settin5gs">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settin6gs">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="setti7ngs">
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
          <Tab.Root id="test-2" defaultValue="account" {...args}>
            <Tab.List>
              <Tab.Trigger color={'gray'} {...args} value="account">
                Account
              </Tab.Trigger>
              <Tab.Trigger {...args} value="documents">
                Documents
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settings">
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
        </Card>
      </Col>
      <Col xs="12">
        <Card>
          <Tab.Root id="test-1" defaultValue="settings" {...args}>
            <Tab.List>
              <Tab.Trigger {...args} value="account">
                Account
              </Tab.Trigger>
              <Tab.Trigger {...args} value="documents">
                Documents
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settings">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settings1">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="setting2s">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settin3gs">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settin4gs">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settin5gs">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settin6gs">
                Settings
              </Tab.Trigger>
              <Tab.Trigger {...args} value="setti7ngs">
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
          <Tab.Root id="test-2" defaultValue="account" {...args}>
            <Tab.List>
              <Tab.Trigger {...args} value="account">
                Account
              </Tab.Trigger>
              <Tab.Trigger {...args} value="documents">
                Documents
              </Tab.Trigger>
              <Tab.Trigger {...args} value="settings">
                Settings
              </Tab.Trigger>
            </Tab.List>
          </Tab.Root>
        </Card>
      </Col>
    </Row>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  triggerHighContrast: false,
  size: 'small',
  color: 'gray',
  variant: 'outlined',
};
