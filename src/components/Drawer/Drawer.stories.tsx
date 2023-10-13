import React from 'react';
import { Meta, Story } from '@storybook/react';
import Drawer, { DrawerProps } from './Drawer';
import Button from '../Button';
import { ThemeProvider } from '../Theme/Theme';
import Typography from '../Typography/Typography';
import Menu from '../Menu/Menu';

export default {
  title: 'Components/Drawer',
  component: Drawer.Root,
} as Meta;

const Template: Story<DrawerProps> = ({ children }) => {
  return (
    <ThemeProvider scaling="100%">
      <Drawer.Root placement="right" overlayVariant={'translucent'}>
        <Drawer.Trigger>
          <Button variant="outlined">Open Detailed Drawer</Button>
        </Drawer.Trigger>

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
              { label: 'Item 4', value: 'item4', onClick: () => console.log('Item 1 clicked') },
              { label: 'Item 5', value: 'item5', onClick: () => console.log('Item 2 clicked') },
              { label: 'Item 6', value: 'item6', onClick: () => console.log('Clicked') },
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
              { label: 'Item 4', value: 'item4', onClick: () => console.log('Item 1 clicked') },
              { label: 'Item 5', value: 'item5', onClick: () => console.log('Item 2 clicked') },
              { label: 'Item 6', value: 'item6', onClick: () => console.log('Clicked') },
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
              { label: 'Item 4', value: 'item4', onClick: () => console.log('Item 1 clicked') },
              { label: 'Item 5', value: 'item5', onClick: () => console.log('Item 2 clicked') },
              { label: 'Item 6', value: 'item6', onClick: () => console.log('Clicked') },
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
      <Drawer.Trigger>
        <Button variant="outlined">Open Simple Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Typography.Text variant="div">This is a simple drawer with just content.</Typography.Text>
      </Drawer.Content>
    </>
  ),
};
