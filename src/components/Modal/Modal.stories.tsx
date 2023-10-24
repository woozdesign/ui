import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button';
import { ThemeProvider } from '../Theme/Theme';
import Typography from '../Typography';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOutside = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider>
      <Button onClick={toggleOutside}>Trigger</Button>
      <Modal.Root
        radius={'medium'}
        shadow={'4'}
        open={isOpen}
        onClose={toggleOutside}
        onConfirm={() => console.log('Modal Confirmed')}
        onCancel={() => console.log('Modal Cancled')}
      >
        <Modal.Content title={'title'} subtitle={'subtitle'}>
          <Typography.Text>This is the content</Typography.Text>
        </Modal.Content>
      </Modal.Root>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
const NestedTemplate: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOutside = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleOutside1 = () => {
    setIsOpen(!isOpen);
  };
  const toggleOutside2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <ThemeProvider>
      <Button onClick={toggleOutside1}>Trigger</Button>
      <Modal.Root open={isOpen} onClose={toggleOutside1} onCancel={() => console.log('Modal Cancled')} onConfirm={() => console.log('Modal Confirmed')}>
        <Modal.Content title={'First Modal'} subtitle={'This is the first modal'}>
          <Typography.Text>This is the content of the first modal</Typography.Text>

          <Button onClick={toggleOutside2}>Trigger2</Button>
          {/* Nested Modal */}
          <Modal.Root variant={'confirm'} open={isOpen2} onClose={toggleOutside2} onConfirm={() => console.log('Modal 2 Confirmed')}>
            <Modal.Content title={'Nested Modal'} subtitle={'This is a nested modal'}>
              <Typography.Text>This is the content of the nested modal</Typography.Text>
              <Modal.Action variant={'confirm'}>
                <Button>close</Button>
              </Modal.Action>
            </Modal.Content>
          </Modal.Root>
          <Modal.Action>
            <Button>close</Button>
          </Modal.Action>
        </Modal.Content>
      </Modal.Root>
    </ThemeProvider>
  );
};

export const NestedModals = NestedTemplate.bind({});
const ConfirmTemplate: Story = () => {
  return (
    <ThemeProvider>
      <Button>Open First Modal</Button>
      <Modal.Root onClose={() => console.log('Modal Closed')} onConfirm={() => console.log('Modal Confirmed')} onCancel={() => console.log('Modal Cancled')}>
        <Modal.Content title={'First Modal'} subtitle={'This is the first modal'}>
          <Button>Open Second Modal</Button>
          <Typography.Text>This is the content of the NORMAL modal</Typography.Text>

          {/* Nested Modal */}
          <Modal.Root
            variant={'confirm'}
            onClose={() => console.log('Modal 2 Closed')}
            onConfirm={() => console.log('Modal 2 Confirmed')}
            onCancel={() => console.log('Modal 2 Cancled')}
          >
            <Modal.Content title={'Nested Modal'} subtitle={'This is a nested modal'}>
              <Typography.Text>This is the content of the CONFIRM modal</Typography.Text>
            </Modal.Content>
          </Modal.Root>
        </Modal.Content>
      </Modal.Root>
    </ThemeProvider>
  );
};
export const ConfirmModals = ConfirmTemplate.bind({});
