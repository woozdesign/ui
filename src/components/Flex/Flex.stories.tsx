import '@/styles/core.scss';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import { ThemeProvider } from '../Theme';
import Flex, { FlexProps } from './Flex';

import { Col, Row } from '../Grid/Grid';
import { Container } from '../Layout/Layout';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => {
  return (
    <ThemeProvider>
      <Container>
        <Row>
          <Col xs={12}>
            <Flex {...args}>
              <Button>Test</Button>
              <Button>Test2</Button>
            </Flex>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
