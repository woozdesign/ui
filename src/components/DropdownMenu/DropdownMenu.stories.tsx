import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../Theme/Theme';
import DropdownMenu from './DropdownMenu';
import Button from '../Button';
import Flex from '../Flex';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu.Root,
  subcomponents: { Trigger: DropdownMenu.Trigger, Content: DropdownMenu.Content },
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider>
    <Flex width={'100%'} align={'center'} justify={'center'} style={{ height: ' 100vh' }}>
      <DropdownMenu.Root {...args}>
        <DropdownMenu.Trigger shortcut={['Ctrl', 'O']}>
          <Button>Trigger</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          placement="top"
          items={[
            {
              label: 'Trigger',
              children: [
                {
                  label: 'Item with Shortcut',
                  shortcut: ['Ctrl', 'Shift', 'A'],
                  onClick: () => {
                    console.log('Item with Shortcu');
                  },
                },
                {
                  variant: 'separator',
                },
                {
                  label: 'Move to folder…',
                },
                {
                  label: 'Advanced options…',
                },
              ],
            },
            {
              variant: 'separator',
            },
            {
              label: 'Edit',
              shortcut: ['Ctrl', 'E'],
              onClick: () => {
                console.log('Edit');
              },
            },
            {
              label: 'Duplicate',
              shortcut: ['Ctrl', 'D'],
              onClick: () => {
                console.log('Duplicate');
              },
            },
            {
              label: 'More',
              shortcut: ['Ctrl', 'M'],
              children: [
                {
                  label: 'Move to project…',
                  shortcut: ['Ctrl', 'M'],
                  onClick: () => {
                    console.log('Move to project…');
                  },
                },
                {
                  label: 'Archive',
                  shortcut: ['Ctrl', 'E'],
                  onClick: () => {
                    console.log('Archive');
                  },
                },
                // ... Other sub-items
              ],
            },
            {
              label: 'Delete',
              shortcut: ['Ctrl', 'X'],
              onClick: () => {
                console.log('Delete');
              },
              color: 'red',
            },
          ]}
        />
      </DropdownMenu.Root>
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});
