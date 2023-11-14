import { Meta, Story } from '@storybook/react';
import { Icon } from '@woozdesign/icons';
import React from 'react';
import { ThemeProvider } from '../Theme/Theme';
import Carousel, { CarouselProps } from './Carousel';

import '@/styles/core.scss';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => (
  <ThemeProvider>
    <Carousel {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  items: [
    'https://images.unsplash.com/photo-1620120966883-d977b57a96ec?q=80',
    'https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80',
    'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80',
  ],

  prevButton: <Icon type={'Zap'} />,
};
