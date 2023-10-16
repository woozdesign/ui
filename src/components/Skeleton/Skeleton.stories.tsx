import '@/styles/core.scss';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Col, Row } from '../Grid/Grid';
import { Container } from '../Layout/Layout';
import { ThemeProvider } from '../Theme/Theme';
import Skeleton from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

// Skeleton Story
const SkeletonTemplate: Story = (args) => (
  <ThemeProvider appearance={'light'}>
    <Container>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12}>
          <Skeleton />
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);
export const Default = SkeletonTemplate.bind({});
Default.args = {};
