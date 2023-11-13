import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Button, Card, Checkbox, Col, Container, Divider, Flex, Form, Row, Switch, TextField, ThemeProvider, Typography } from '../components';
import { Icon } from '@woozdesign/icons';
import PricingCard from './Examples/PricingCard';
import TodoCard from './Examples/TodoCard';
import NotificationCard from './Examples/NotificationCard';
import InvoiceCard from './Examples/InvoiceCard';
import SignUpCard from './Examples/SignUpCard';
import PanelCard from './Examples/PanelCard';
import UserInfoCard from './Examples/UserInfoCard';
import StockCard from './Examples/StockCard';

export default {
  title: 'Theme/Preview',
} as Meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider scaling={'100%'} accentColor={'blue'} appearance={'light'} radius={'medium'} shadow="5">
      <Container>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12}>
            <UserInfoCard />
          </Col>
          <Col xs={24} sm={12}>
            <SignUpCard />
          </Col>

          <Col xs={24} md={12}>
            <InvoiceCard />
          </Col>
          <Col xs={24} md={12}>
            <StockCard />
          </Col>

          <Col xs={24} md={24}>
            <PricingCard />
          </Col>

          <Col xs={24} md={12}>
            <NotificationCard />
          </Col>

          <Col xs={24} md={12}>
            <TodoCard />
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
