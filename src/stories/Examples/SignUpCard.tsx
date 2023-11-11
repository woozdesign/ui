import React, { FC } from 'react';

import { Button, Card, Col, Flex, Form, Row, TextField, Typography } from '../../components';
interface SignUpCardProps {}

const SignUpCard: FC<SignUpCardProps> = ({}) => {
  return (
    <Card variant={'translucent'} size={'large'}>
      <Card.Header title="Sign Up" titleSize={'4'} />
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
          <Button highContrast>Sign Up</Button>
        </Flex>
      </Card.Action>
    </Card>
  );
};

export default SignUpCard;
