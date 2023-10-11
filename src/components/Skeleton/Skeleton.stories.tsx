import React from 'react';
import { Meta, Story } from '@storybook/react';
import Skeleton from './Skeleton';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';
import Flex from '../Flex';
import Layout from '../Layout/Layout';
import Typography from '../Typography';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

// Skeleton Story
const SkeletonTemplate: Story = (args) => (
  <ThemeProvider appearance={'dark'}>
    <Layout.Container>
      <Layout.Row gutter={[32, 32]}>
        <Layout.Col xs={24} sm={12}>
          <Skeleton />
        </Layout.Col>
      </Layout.Row>
    </Layout.Container>
  </ThemeProvider>
);
export const Default = SkeletonTemplate.bind({});
Default.args = {};
