import React from 'react';
import { Meta, Story } from '@storybook/react';
import IconMenu, { IconMenuProps } from './IconMenu';
import { ThemeProvider } from '../Theme/Theme';
import '@/styles/core.scss';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Components/IconMenu',
  component: IconMenu,
} as Meta;

const Template: Story<IconMenuProps> = (args) => (
  <ThemeProvider appearance={'light'}>
    <IconMenu.Root {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: <Icon type="Zap" />, value: 'item1', onClick: () => console.log('Item 1 clicked') },
    { label: <Icon type="Zap" />, value: 'item2', onClick: () => console.log('Item 2 clicked') },
    { label: <Icon type="Zap" />, value: 'item3', onClick: () => console.log('Clicked') },
    { label: <Icon type="Zap" />, value: 'item4', onClick: () => console.log('Item 1 clicked') },
    { label: <Icon type="Zap" />, value: 'item5', onClick: () => console.log('Item 2 clicked') },
    { label: <Icon type="Zap" />, value: 'item6', onClick: () => console.log('Clicked') },
  ],
  size: 'medium',
  defaultValue: 'item2', // Setting Item 2 as active for demonstration
};
