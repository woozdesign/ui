import React from 'react';
import { Meta, Story } from '@storybook/react';
import Segmented, { RootProps as TabProps, TriggerProps } from './Segmented';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';
import Card from '../Card';

import { Col, Row } from '../Grid';

export default {
  title: 'Components/Segmented',
  component: Segmented.Trigger,
  args: {},
} as Meta;

interface StoryProps extends TabProps {}

const Template: Story<StoryProps> = (args) => (
  <ThemeProvider>
    <Row>
      <Col xs="8">
        <Card variant={'transparent'}>
          <Segmented.Root id="test-1" defaultValue="settings">
            <Segmented.List {...args}>
              <Segmented.Trigger value="account">Account</Segmented.Trigger>
              <Segmented.Trigger value="documents">Documents</Segmented.Trigger>
              <Segmented.Trigger value="settings">Settings</Segmented.Trigger>
            </Segmented.List>

            <div style={{ padding: '10px 15px' }}>
              <Segmented.Content value="account">
                <p>Make changes to your account.</p>
              </Segmented.Content>
              <Segmented.Content value="documents">
                <p>Access and update your documents.</p>
              </Segmented.Content>
              <Segmented.Content value="settings">
                <p>Edit your profile or update contact information.</p>
              </Segmented.Content>
            </div>
          </Segmented.Root>
        </Card>
      </Col>
    </Row>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  size: 'small',
  color: 'gray',
  radius: 'medium',
  highContrast: false,
  block: false,
};
