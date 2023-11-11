import React, { FC } from 'react';
import { Card, Col, Divider, Flex, Row, Switch, Typography } from '../../components';

interface NotificationCardProps {}

const NotificationCard: FC<NotificationCardProps> = ({}) => {
  return (
    <Card variant={'translucent'} size={'large'}>
      <Card.Header title="Notifications" titleSize={'4'} subtitle={'Manage your notification Settings'} subtitleSize={'2'} />
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
                    <Switch highContrast radius={'full'} defaultChecked={true} />
                    <Typography.Text size={'2'} weight="bold">
                      Push
                    </Typography.Text>
                  </Flex>
                  <Flex>
                    <Switch highContrast radius={'full'} defaultChecked={true} />
                    <Typography.Text size={'2'} weight="bold">
                      Email
                    </Typography.Text>
                  </Flex>
                  <Flex>
                    <Switch highContrast radius={'full'} />
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
                    <Switch highContrast radius={'full'} defaultChecked={true} />
                    <Typography.Text size={'2'} weight="bold">
                      Push
                    </Typography.Text>
                  </Flex>
                  <Flex>
                    <Switch highContrast radius={'full'} defaultChecked={true} />
                    <Typography.Text size={'2'} weight="bold">
                      Email
                    </Typography.Text>
                  </Flex>
                  <Flex>
                    <Switch highContrast radius={'full'} />
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
                    <Switch highContrast radius={'full'} defaultChecked={true} />
                    <Typography.Text size={'2'} weight="bold">
                      Push
                    </Typography.Text>
                  </Flex>
                  <Flex>
                    <Switch highContrast radius={'full'} defaultChecked={true} />
                    <Typography.Text size={'2'} weight="bold">
                      Email
                    </Typography.Text>
                  </Flex>
                  <Flex>
                    <Switch highContrast radius={'full'} defaultChecked={false} />
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
  );
};

export default NotificationCard;
