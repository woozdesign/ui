// Avatar.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import { ThemeProvider } from '../Theme';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => (
  <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>
);

export const DefaultWithImage = Template.bind({});
DefaultWithImage.args = {
  src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
  fallback: 'A',
};

export const DefaultWithFallback = Template.bind({});
DefaultWithFallback.args = {
  fallback: 'A',
};

export const SmallWithFallback = Template.bind({});
SmallWithFallback.args = {
  size: 'small',
  fallback: 'S',
};

export const LargeWithFallback = Template.bind({});
LargeWithFallback.args = {
  size: 'large',
  fallback: 'L',
};

export const DynamicSize = Template.bind({});
DynamicSize.args = {
  src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
  size: { xs: 'small', md: 'large' },
  fallback: 'L',
};

export const ImageErrorFallback = Template.bind({});
ImageErrorFallback.args = {
  src: 'https://invalid-url.com/invalid-image.jpg',
  fallback: <Icon type={'AlertCircle'} />,
};
