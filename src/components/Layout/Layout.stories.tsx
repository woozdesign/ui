import { Meta, Story } from '@storybook/react';
import React from 'react';

import '@/styles/core.scss';
import Card from '../Card';
import { Col, Row } from '../Grid/Grid';
import { ThemeProvider } from '../Theme/Theme';
import Layout, { Container, ContainerProps } from './Layout';

export default {
  title: 'Layout/Layout',
  component: Layout,
} as Meta;

// Combined Story with Container, Row, and Col
export const GridSystemStory: Story<ContainerProps> = (args) => (
  <ThemeProvider>
    <Container {...args}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={3} md={0}>
          <Card outlined>
            <Card.Body title={'Column 1'}></Card.Body>
          </Card>
        </Col>
        <Col xs={0} sm={21} md={8}>
          <Card outlined>
            <Card.Body title={'Column 2'}></Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Card outlined>
            <Card.Body title={'Column 3'}></Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Card outlined>
            <Card.Body title={'Column 4'}></Card.Body>
          </Card>
        </Col>
        <Col xs={16} md={8}>
          <Card outlined>
            <Card.Body title={'Column 5'}></Card.Body>
          </Card>
        </Col>
      </Row>
      <Row gutter={[32, 32]} style={{ marginTop: '4rem' }} align="center" justify="center">
        <Col xs={24} md={8}>
          <Card outlined>
            <Card.Body title={'Column 1'}></Card.Body>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card outlined>
            <Card.Body title={'Column 2'}></Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Card outlined>
            <Card.Body title={'Column 3'}></Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Card outlined>
            <Card.Body title={'Column 4'}></Card.Body>
          </Card>
        </Col>
        <Col xs={16} md={8}>
          <Card outlined>
            <Card.Body title={'Column 5'}></Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);
