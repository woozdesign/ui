import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal from './Modal';
import Theme from '../Theme/Theme';
import Button from '../Button';
import Typography from '../Typography';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story = () => (
  <Theme.ThemeProvider>
    <Modal.Root onClose={() => console.log('Modal Closed')} onConfirm={() => console.log('Modal Confirmed')} onCancel={() => console.log('Modal Cancled')}>
      <Modal.Trigger>
        <Button>Trigger</Button>
      </Modal.Trigger>
      <Modal.Content title={'title'} subtitle={'subtitle'}>
        <Typography.Text>This is the content</Typography.Text>
      </Modal.Content>
    </Modal.Root>
  </Theme.ThemeProvider>
);

export const Default = Template.bind({});
const NestedTemplate: Story = () => (
  <Theme.ThemeProvider>
    <Modal.Root onClose={() => console.log('Modal Closed')} onCancel={() => console.log('Modal Cancled')} onConfirm={() => console.log('Modal Confirmed')}>
      <Modal.Trigger>
        <Button>Open First Modal</Button>
      </Modal.Trigger>
      <Modal.Content title={'First Modal'} subtitle={'This is the first modal'}>
        <Typography.Text>This is the content of the first modal</Typography.Text>

        {/* Nested Modal */}
        <Modal.Root onClose={() => console.log('Modal 2 Closed')} onConfirm={() => console.log('Modal 2 Confirmed')}>
          <Modal.Trigger>
            <Button>Open Nested Modal</Button>
          </Modal.Trigger>
          <Modal.Content title={'Nested Modal'} subtitle={'This is a nested modal'}>
            <Typography.Text>This is the content of the nested modal</Typography.Text>
          </Modal.Content>
        </Modal.Root>
      </Modal.Content>
    </Modal.Root>
  </Theme.ThemeProvider>
);

export const NestedModals = NestedTemplate.bind({});
const ConfirmTemplate: Story = () => (
  <Theme.ThemeProvider>
    <Modal.Root onClose={() => console.log('Modal Closed')} onConfirm={() => console.log('Modal Confirmed')} onCancel={() => console.log('Modal Cancled')}>
      <Modal.Trigger>
        <Button>Open First Modal</Button>
      </Modal.Trigger>
      <Modal.Content title={'First Modal'} subtitle={'This is the first modal'}>
        <Typography.Text>This is the content of the NORMAL modal</Typography.Text>

        {/* Nested Modal */}
        <Modal.Root
          variant={'confirm'}
          onClose={() => console.log('Modal 2 Closed')}
          onConfirm={() => console.log('Modal 2 Confirmed')}
          onCancel={() => console.log('Modal 2 Cancled')}
        >
          <Modal.Trigger>
            <Button>Open Nested Modal</Button>
          </Modal.Trigger>
          <Modal.Content title={'Nested Modal'} subtitle={'This is a nested modal'}>
            <Typography.Text>This is the content of the CONFIRM modal</Typography.Text>
          </Modal.Content>
        </Modal.Root>
      </Modal.Content>
    </Modal.Root>
  </Theme.ThemeProvider>
);

export const ConfirmModals = ConfirmTemplate.bind({});
