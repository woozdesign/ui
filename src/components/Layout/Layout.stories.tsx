import React from 'react';
import { Meta, Story } from '@storybook/react';

import Layout, { ContainerProps, RowProps, ColProps } from './Layout';
import Card from '../Card';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Layout/Layout',
  component: Layout,
} as Meta;

// Combined Story with Container, Row, and Col
export const GridSystemStory: Story<ContainerProps> = (args) => (
  <Theme.ThemeProvider>
    <Layout.Container {...args}>
      <Layout.Row gutter={[32, 32]}>
        <Layout.Col xs={24} md={8}>
          <Card outlined>
            <Card.Body title={'Column 1'}></Card.Body>
          </Card>
        </Layout.Col>
        <Layout.Col xs={24} md={8}>
          <Card outlined>
            <Card.Body title={'Column 2'}></Card.Body>
          </Card>
        </Layout.Col>
        <Layout.Col xs={12} md={8}>
          <Card outlined>
            <Card.Body title={'Column 3'}></Card.Body>
          </Card>
        </Layout.Col>
        <Layout.Col xs={12} md={8}>
          <Card outlined>
            <Card.Body title={'Column 4'}></Card.Body>
          </Card>
        </Layout.Col>
        <Layout.Col xs={16} md={8}>
          <Card outlined>
            <Card.Body title={'Column 5'}></Card.Body>
          </Card>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row gutter={[32, 32]} style={{ marginTop: '4rem' }} align="center" justify="center">
        <Layout.Col xs={24} md={8}>
          <Card outlined>
            <Card.Body title={'Column 1'}></Card.Body>
          </Card>
        </Layout.Col>
        <Layout.Col xs={24} md={8}>
          <Card outlined>
            <Card.Body title={'Column 2'}></Card.Body>
          </Card>
        </Layout.Col>
        <Layout.Col xs={12} md={8}>
          <Card outlined>
            <Card.Body title={'Column 3'}></Card.Body>
          </Card>
        </Layout.Col>
        <Layout.Col xs={12} md={8}>
          <Card outlined>
            <Card.Body title={'Column 4'}></Card.Body>
          </Card>
        </Layout.Col>
        <Layout.Col xs={16} md={8}>
          <Card outlined>
            <Card.Body title={'Column 5'}></Card.Body>
          </Card>
        </Layout.Col>
      </Layout.Row>
    </Layout.Container>
  </Theme.ThemeProvider>
);
