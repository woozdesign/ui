// Image.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Image, { ImageProps } from './Image';
import Theme from '../Theme';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => (
  <Theme.ThemeProvider>
    <div style={{ width: '320px', height: '320px' }}>
      <Image {...args} />
    </div>
  </Theme.ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=800&q=80',
  alt: 'Sample Image',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=800&q=80',
  alt: 'Sample Image with Placeholder',
  placeholder: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=50&q=80', // low-res/small version
};

export const WithSolidPlaceholder = Template.bind({});
WithSolidPlaceholder.args = {
  src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=800&q=80',
  alt: 'Sample Image with Solid Color Placeholder',
  placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/+/3QQcAAAAASUVORK5CYII=', // solid white image
};

export const ImageLoadError = Template.bind({});
ImageLoadError.args = {
  src: 'https://invalid-url.com/invalid-image.jpg',
  alt: 'Invalid Image',
  placeholder: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=50&q=80',
};

export const ImageSize = Template.bind({});
ImageSize.args = {
  src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=800&q=80',
  alt: 'Description',
  placeholder: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=50&q=80',
  width: '300px',
  height: '200px',
  objectFit: 'cover',
};
