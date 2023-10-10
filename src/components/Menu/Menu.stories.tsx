import React from 'react';
import { Meta, Story } from '@storybook/react';
import Menu, { MenuProps } from './Menu';
import Theme from '../Theme/Theme';
import '@/styles/core.scss';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <Menu {...args} />
  </Theme.ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Only Label' },
    { label: 'Item 1', value: 'item1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', value: 'item2', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 3', value: 'item3', href: 'https://example.com' },
    { label: 'Only Label2' },
    { label: 'Item 4', value: 'item4', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 5', value: 'item5', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 6', value: 'item6', href: 'https://example.com' },
  ],
  defaultValue: 'item2', // Setting Item 2 as active for demonstration
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: [
    { label: 'Only Label' },
    { label: 'Item 1', value: 'item1', iconPrepend: <Icon type={'Feather'} />, onClick: () => console.log('Item 1 with icon clicked') },
    { label: 'Item 2', value: 'item2', iconAppend: <Icon type={'Zap'} />, onClick: () => console.log('Item 2 with icon clicked') },
  ],
  defaultValue: 'item1', // Setting Item 1 as active for demonstration
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  items: [
    { label: 'Only Label' },
    { label: 'Horizontal Item 1', value: 'hitem1', onClick: () => console.log('Horizontal Item 1 clicked') },
    { label: 'Horizontal Item 2', value: 'hitem2', onClick: () => console.log('Horizontal Item 2 clicked') },
    { label: 'Horizontal Item 3', value: 'hitem3', href: 'https://example.com' },
  ],
  orientation: 'horizontal',
  defaultValue: 'hitem3', // Setting Horizontal Item 3 as active for demonstration
};
