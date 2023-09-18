import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'black',
          value: '#000',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    },
  },
};

export default preview;
