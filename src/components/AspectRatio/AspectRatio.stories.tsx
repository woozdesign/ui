// AspectRatio.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import AspectRatio, { AspectRatioProps } from './AspectRatio';
import { ThemeProvider } from '../Theme';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
} as Meta;

const Template: Story<AspectRatioProps> = (args) => (
  <ThemeProvider>
    <AspectRatio {...args} />
  </ThemeProvider>
);

export const DefaultWithImage = Template.bind({});
DefaultWithImage.args = {
  ratio: 16 / 8,
  children: (
    <img
      src="https://images.unsplash.com/photo-1479030160180-b1860951d696"
      alt="A house in a forest"
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 'var(--radius-2)',
      }}
    />
  ),
};
