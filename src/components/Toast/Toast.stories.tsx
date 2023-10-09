import '@/styles/core.scss';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import Layout from '../Layout/Layout';
import Theme from '../Theme';
import { useToast } from './Toast';

export default {
  title: 'Components/Toast',
} as Meta;

const Template: Story<NotificationProps> = (args) => {
  const [openToast, ToastProvider] = useToast();
  const triggerNotification = () => {
    openToast({
      message: 'Toast Title',
      description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 1000,
      placement: 'bottomRight',
    });
  };

  return (
    <Theme.ThemeProvider>
      {ToastProvider}
      <Layout.Container>
        <Layout.Row>
          <Layout.Col xs={12}>
            <Button onClick={triggerNotification}>Open the notification box</Button>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    </Theme.ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
