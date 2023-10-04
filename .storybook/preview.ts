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
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#000',
        },
        {
          name: 'white',
          value: '#fff',
        },
      ],
    },
    // Add this line to disable keyboard shortcuts
    keyboardShortcuts: false,
  },
};

export default preview;
