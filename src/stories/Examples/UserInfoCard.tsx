import React, { FC, useState } from 'react';
import { Avatar, Button, Callout, Card, Checkbox, Col, Divider, Flex, IconButton, Row, Tab, TextField, Typography } from '../../components';
import { Icon } from '@woozdesign/icons';

interface UserInfoCardProps {}

const UserInfoCard: FC<UserInfoCardProps> = ({}) => {
  return (
    <Card variant={'translucent'} size={'large'}>
      <Card.Header
        title={
          <Flex align="center">
            <Avatar color={'green'} fallback="A" size={'small'} />
            <Typography.Text weight="bold">Annie Atkins</Typography.Text>
          </Flex>
        }
        action={
          <IconButton variant={'transparent'}>
            <Icon type={'MoreHorizontal'} />
          </IconButton>
        }
      />
      <Card.Body
        content={
          <Row gutter={[0, 8]}>
            <Col xs={24}>
              <Flex direction="column" width={'100%'} mb="1" justify={'space-between'}>
                <Row gutter={[0, 8]} width={'100%'} align="center">
                  <Col xs={12}>
                    <Typography.Text size={'3'} highContrast={false}>
                      Email
                    </Typography.Text>
                  </Col>
                  <Col xs={12}>
                    <Flex align="center" justify="end">
                      <Typography.Text>annie@woozdesign.com</Typography.Text>
                      <IconButton size={'small'} variant={'transparent'}>
                        <Icon size={'small'} type={'Copy'} />
                      </IconButton>
                    </Flex>
                  </Col>

                  <Col xs={12}>
                    <Typography.Text size={'3'} highContrast={false}>
                      ID
                    </Typography.Text>
                  </Col>
                  <Col xs={12}>
                    <Flex align="center" justify="end">
                      <Typography.Text>u_01H8J8NS2BTD8N21CPBDP</Typography.Text>
                      <IconButton size={'small'} variant={'transparent'}>
                        <Icon size={'small'} type={'Copy'} />
                      </IconButton>
                    </Flex>
                  </Col>
                </Row>
              </Flex>
            </Col>

            <Col xs={24}>
              <Divider my="2" />
            </Col>

            <Col xs={24}>
              <Flex direction="column" width={'100%'} mb="1" justify={'space-between'}>
                <Row width={'100%'} gutter={[0, 8]}>
                  <Col xs={24}>
                    <Flex align="center" justify={'space-between'}>
                      <Typography.Header mb="2" size={'3'}>
                        Group
                      </Typography.Header>

                      <IconButton variant={'transparent'}>
                        <Icon type={'Plus'} />
                      </IconButton>
                    </Flex>
                  </Col>
                  <Col xs={24}>
                    <Typography.Text size={'3'} highContrast={false}>
                      <Button variant={'outlined'} radius={'full'}>
                        <div
                          style={{
                            width: '8px',
                            aspectRatio: '1/1',
                            background: 'var(--color-red-9)',
                            borderRadius: '50%',
                          }}
                        />{' '}
                        Enterprise
                      </Button>
                    </Typography.Text>
                  </Col>

                  <Col xs={24}>
                    <Flex align="center" justify={'space-between'}>
                      <Typography.Header mb="2" size={'3'}>
                        Other threads
                      </Typography.Header>

                      <IconButton variant={'transparent'}>
                        <Icon type={'Plus'} />
                      </IconButton>
                    </Flex>
                  </Col>
                  <Col xs={24}>
                    <Callout variant={'outlined'}>
                      <Flex width={'100%'} align="center" justify="space-between">
                        <Flex align="center">
                          <div
                            style={{
                              width: '8px',
                              aspectRatio: '1/1',
                              background: 'var(--color-indigo-9)',
                              borderRadius: '50%',
                            }}
                          />
                          Feature request: Webhooks
                        </Flex>
                        <Typography.Text highContrast={false}>1d ago</Typography.Text>
                      </Flex>
                    </Callout>
                  </Col>
                </Row>
              </Flex>
            </Col>
          </Row>
        }
      ></Card.Body>
    </Card>
  );
};

export default UserInfoCard;
