import { Meta, Story } from '@storybook/react';
import React from 'react';

import '@/styles/core.scss';
import Card from '../Card';
import { Col, Row } from '../Grid/Grid';
import { ThemeProvider } from '../Theme/Theme';
import Tree from './Tree';
import { TreeProps } from './Tree.props';

export default {
  title: 'Components/Tree',
  component: Tree,
} as Meta;

// Combined Story with Container, Row, and Col
export const Default: Story<TreeProps> = (args) => (
  <ThemeProvider accentColor={'amber'}>
    <Tree {...args} />
  </ThemeProvider>
);

Default.args = {
  data: [
    {
      id: '1',
      label: 'Parent 1',
      children: [
        {
          id: '3',
          label: 'Child 1',
        },
        {
          id: '4',
          label: 'Child 2',
          children: [
            {
              id: '5',
              label: 'Grandchild 1',
            },
            {
              id: '6',
              label: 'Grandchild 2',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      label: 'Parent 2',
      children: [{ id: '7', label: 'Child 3' }],
    },
  ],
};
