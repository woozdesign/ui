import '@/styles/core.scss';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../Theme';
import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';

import Container from '../Container';
import { Col, Row } from '../Grid/Grid';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => {
  return (
    <ThemeProvider>
      <Container>
        <Row>
          <Col xs={24}>
            <Breadcrumb {...args} />
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      key: '1',
      href: '#1components-Breadcrumb-demo-basic',
      title: 'Basic demo',
      active: true,
    },
    {
      key: '2',
      href: '#1components-Breadcrumb-demo-static',
      title: 'Static demo LONG TITLE',
      active: true,
    },
    {
      key: 'aaapi',
      href: '#aaapi',
      title: 'API',
      active: false,
    },
  ],
};
