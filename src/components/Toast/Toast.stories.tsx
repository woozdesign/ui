import '@/styles/core.scss';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import Layout from '../Layout/Layout';
import { ThemeProvider } from '../Theme';
import Flex from '../Flex';
import { useToast } from './Toast';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Components/Toast',
} as Meta;

const Template: Story<NotificationProps> = (args) => {
  const [openToast, ToastProvider] = useToast();
  const triggerNotification = (placement: string) => {
    openToast({
      variant: 'translucent',
      iconPrepend: <Icon type={'AlertCircle'} size={'medium'} />,
      message: 'This is Looooooooong Looooooooong toast title.',
      duration: args.duration,
      placement: placement,
    });
  };

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  duration: 1000,
};
