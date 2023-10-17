import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button';
import Menu from '../Menu/Menu';
import { ThemeProvider } from '../Theme/Theme';
import Typography from '../Typography/Typography';
import Drawer, { DrawerProps } from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer.Root,
} as Meta;

const Template: Story<DrawerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOutside = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider scaling="100%">
      <Button onClick={toggleOutside}>button</Button>
      <Drawer.Root isOpen={isOpen} onClose={toggleOutside} placement="right" overlayVariant={'translucent'}>
        <Drawer.Header title="Drawer Header" />
        <Drawer.Footer>Test</Drawer.Footer>
        <Drawer.Content>
          <Menu
            items={[
              { label: 'Only Label' },
              { label: 'Item 1', value: 'item1', onClick: () => console.log('Item 1 clicked') },
              { label: 'Item 2', value: 'item2', onClick: () => console.log('Item 2 clicked') },
              { label: 'Item 3', value: 'item3', onClick: () => console.log('Clicked') },
              { label: 'Only Label2' },
              { label: 'Item 4', value: 'item4', onClick: () => console.log('Item 1 clicked') },
              { label: 'Item 5', value: 'item5', onClick: () => console.log('Item 2 clicked') },
              { label: 'Item 6', value: 'item6', onClick: () => console.log('Clicked') },
              { label: 'Only Label' },
              { label: 'Item 1', value: 'item1', onClick: () => console.log('Item 1 clicked') },
              { label: 'Item 2', value: 'item2', onClick: () => console.log('Item 2 clicked') },
              { label: 'Item 3', value: 'item3', onClick: () => console.log('Clicked') },
              { label: 'Only Label2' },
            ]}
          />
        </Drawer.Content>
      </Drawer.Root>
    </ThemeProvider>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  children: (
    <>
      <Drawer.Content>
        <Typography.Text variant="div">This is a simple drawer with just content.</Typography.Text>
      </Drawer.Content>
    </>
  ),
};
