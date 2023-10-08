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
    { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 3', href: 'https://example.com' },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: [
    { label: 'Item 1', iconPrepend: <Icon type={'Feather'} />, onClick: () => console.log('Item 1 with icon clicked') },
    { label: 'Item 2', iconAppend: <Icon type={'Zap'} />, onClick: () => console.log('Item 2 with icon clicked') },
  ],
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  items: [
    { label: 'Vertical Item 1', onClick: () => console.log('Vertical Item 1 clicked') },
    { label: 'Vertical Item 2', onClick: () => console.log('Vertical Item 2 clicked') },
    { label: 'Vertical Item 3', href: 'https://example.com' },
  ],
  // You might want to add a prop in your Menu component to handle vertical orientation
  orientation: 'horizontal',
};
