import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Button, Card, Col, Divider, Flex, Form, Row, Switch, TextField, ThemeProvider, Typography } from '../components';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Theme/Preview',
} as Meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider scaling={'100%'} accentColor={'indigo'} radius={'medium'} shadow="5">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <Card variant={'translucent'} size={'large'}>
            <Card.Header title="Sign Up" />
            <Card.Body
              content={
                <Form>
                  <Row>
                    <Col xs={24}>
                      <Flex width={'100%'} mb="1">
                        <Typography.Text weight="bold">Email</Typography.Text>
                      </Flex>
                      <TextField shadow="0" block placeholder="Enter your password" />
                    </Col>
                    <Col xs={24}>
                      <Flex width={'100%'} mb="1" justify={'space-between'} align="center">
                        <Typography.Text weight="bold">Password</Typography.Text>
                        <Button size={'small'} variant={'transparent'}>
                          Forgot password?
                        </Button>
                      </Flex>
                      <TextField shadow="0" block placeholder="Enter your password" />
                    </Col>
                  </Row>
                </Form>
              }
            ></Card.Body>
            <Card.Action>
              <Flex width={'100%'} justify="end">
                <Button variant={'outlined'}>Create an account</Button>
                <Button>Sign Up</Button>
              </Flex>
            </Card.Action>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card variant={'translucent'} size={'large'}>
            <Card.Header title="Pricing" subtitle={'No credit card required. Every plan includes a 30-day trial of all Pro features.'} subtitleSize={'2'} />
            <Card.Body
              content={
                <Row gutter={[32, 32]}>
                  <Col xs={24} md={8}>
                    <Flex width={'100%'} mb="4" justify={'space-between'}>
                      <Flex direction="column">
                        <Flex direction="column">
                          <Typography.Text weight="bold">Basic</Typography.Text>
                          <Typography.Text size={'2'} highContrast={false}>
                            3 team members
                          </Typography.Text>
                        </Flex>
                        <Flex direction="row">
                          <Typography.Text weight="bold">$0</Typography.Text>
                          <Typography.Text highContrast={false}>/ mo</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Button block variant={'outlined'}>
                      Downgrade
                    </Button>
                  </Col>
                  <Col xs={24} md={8}>
                    <Flex width={'100%'} mb="4" justify={'space-between'}>
                      <Flex direction="column">
                        <Flex direction="column">
                          <Typography.Text weight="bold">Growth</Typography.Text>
                          <Typography.Text size={'2'} highContrast={false}>
                            10 team members
                          </Typography.Text>
                        </Flex>
                        <Flex direction="row">
                          <Typography.Text weight="bold">$49</Typography.Text>
                          <Typography.Text highContrast={false}>/ mo</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Button block variant={'outlined'}>
                      Go to Billing
                    </Button>
                  </Col>
                  <Col xs={24} md={8}>
                    <Flex width={'100%'} mb="4" justify={'space-between'}>
                      <Flex direction="column">
                        <Flex direction="column">
                          <Typography.Text weight="bold">Pro</Typography.Text>
                          <Typography.Text size={'2'} highContrast={false}>
                            Unlimited team members
                          </Typography.Text>
                        </Flex>
                        <Flex direction="row">
                          <Typography.Text weight="bold">$99</Typography.Text>
                          <Typography.Text highContrast={false}>/ mo</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                        <Flex direction="row" align="center">
                          <Icon type={'CheckCircle'} color={'grass'} />
                          <Typography.Text size={'2'}>Expense tracking</Typography.Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Button block variant={'solid'}>
                      Upgrade
                    </Button>
                  </Col>
                </Row>
              }
            ></Card.Body>
          </Card>
        </Col>
        <Col xs={7}>
          <Card variant={'translucent'} size={'large'}>
            <Card.Body
              content={
                <Flex direction="column" align="center" justify={'center'}>
                  <Icon type={'CheckCircle'} color={'grass'} />
                  <Typography.Text align="center" weight="bold">
                    Invoice paid
                  </Typography.Text>
                  <Typography.Text align="center" size={'2'} highContrast={false}>
                    You paid $17,975.30. A receipt copy was sent to{' '}
                    <Typography.Text size={'2'} weight="bold">
                      accounting@example.com
                    </Typography.Text>
                  </Typography.Text>
                </Flex>
              }
            ></Card.Body>

            <Card.Action>
              <Flex width={'100%'} direction={'column'}>
                <Button block>Receipt</Button>
                <Button block variant={'outlined'}>
                  Done
                </Button>
              </Flex>
            </Card.Action>
          </Card>
        </Col>

        <Col xs={12}>
          <Card variant={'translucent'} size={'large'}>
            <Card.Header title="Notifications" subtitle={'Manage your notification Settings'} subtitleSize={'2'} />
            <Card.Body
              content={
                <Row>
                  <Col xs={24}>
                    <Flex width={'100%'} mb="1" justify={'space-between'}>
                      <Flex direction="column">
                        <Typography.Text weight="bold">Comments</Typography.Text>
                        <Typography.Text size={'2'} highContrast={false}>
                          Receive notifications when someone comments on your documents or mentions you.
                        </Typography.Text>
                      </Flex>
                      <Flex direction="column">
                        <Flex>
                          <Switch radius={'full'} checked />
                          <Typography.Text size={'2'} weight="bold">
                            Push
                          </Typography.Text>
                        </Flex>
                        <Flex>
                          <Switch radius={'full'} checked />
                          <Typography.Text size={'2'} weight="bold">
                            Email
                          </Typography.Text>
                        </Flex>
                        <Flex>
                          <Switch radius={'full'} />
                          <Typography.Text size={'2'} weight="bold">
                            Slack
                          </Typography.Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Divider color={'gray'} my="4" />
                  </Col>
                  <Col xs={24}>
                    <Flex width={'100%'} mb="1" justify={'space-between'}>
                      <Flex direction="column">
                        <Typography.Text weight="bold">Favorites</Typography.Text>
                        <Typography.Text size={'2'} highContrast={false}>
                          Receive notifications when there is activity related to your favorited items.
                        </Typography.Text>
                      </Flex>
                      <Flex direction="column">
                        <Flex>
                          <Switch radius={'full'} checked />
                          <Typography.Text size={'2'} weight="bold">
                            Push
                          </Typography.Text>
                        </Flex>
                        <Flex>
                          <Switch radius={'full'} checked />
                          <Typography.Text size={'2'} weight="bold">
                            Email
                          </Typography.Text>
                        </Flex>
                        <Flex>
                          <Switch radius={'full'} />
                          <Typography.Text size={'2'} weight="bold">
                            Slack
                          </Typography.Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Divider color={'gray'} my="4" />
                  </Col>
                  <Col xs={24}>
                    <Flex width={'100%'} mb="1" justify={'space-between'}>
                      <Flex direction="column">
                        <Typography.Text weight="bold">New documents</Typography.Text>
                        <Typography.Text size={'2'} highContrast={false}>
                          Receive notifications whenever people on your team create new documents.
                        </Typography.Text>
                      </Flex>
                      <Flex direction="column">
                        <Flex>
                          <Switch radius={'full'} checked />
                          <Typography.Text size={'2'} weight="bold">
                            Push
                          </Typography.Text>
                        </Flex>
                        <Flex>
                          <Switch radius={'full'} checked />
                          <Typography.Text size={'2'} weight="bold">
                            Email
                          </Typography.Text>
                        </Flex>
                        <Flex>
                          <Switch radius={'full'} />
                          <Typography.Text size={'2'} weight="bold">
                            Slack
                          </Typography.Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Col>
                </Row>
              }
            ></Card.Body>
          </Card>
        </Col>
      </Row>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
