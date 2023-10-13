import React from 'react';
import { Meta, Story } from '@storybook/react';
import Menu, { MenuProps } from './Menu';
import { ThemeProvider } from '../Theme/Theme';
import '@/styles/core.scss';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <ThemeProvider appearance={'light'}>
    <Menu {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Only Label' },
    { label: 'Item 1', value: 'item1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', value: 'item2', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 3', value: 'item3', onClick: () => console.log('Clicked') },
    { label: 'Only Label2' },
    { label: 'Item 4', value: 'item4', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 5', value: 'item5', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 6', value: 'item6', onClick: () => console.log('Clicked') },
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
