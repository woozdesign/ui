import '@/styles/core.scss';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import Layout from '../Layout/Layout';
import Theme from '../Theme';
import Flex from '../Flex';
import { useToast } from './Toast';

export default {
  title: 'Components/Toast',
} as Meta;

const Template: Story<NotificationProps> = (args) => {
  const [openToast, ToastProvider] = useToast();
  const triggerNotification = (placement: string) => {
    openToast({
      message: 'Toast Title',
      // description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: args.duration,
      placement: placement,
    });
  };

  return (
    <Theme.ThemeProvider>
      {ToastProvider}

      <Flex direction={'col'} space={4} width={'100%'} align={'center'} justify={'center'} height={'100%'}>
        <Flex direction={'rows'} space={4}>
          <Button onClick={() => triggerNotification('topLeft')}>Top Left</Button>
          <Button onClick={() => triggerNotification('topRight')}>Top Right</Button>
        </Flex>
        <Flex direction={'rows'} space={4}>
          <Button onClick={() => triggerNotification('bottomLeft')}>Bottom Left</Button>
          <Button onClick={() => triggerNotification('bottomRight')}>Bottom Right</Button>
        </Flex>
      </Flex>
    </Theme.ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  duration: 1000,
};
