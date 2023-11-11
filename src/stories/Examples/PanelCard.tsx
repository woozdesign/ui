import React, { FC, useState } from 'react';
import { Card, Checkbox, Col, Divider, Flex, Row, Tab, TextField, Typography } from '../../components';

interface PanelCardProps {}

const PanelCard: FC<PanelCardProps> = ({}) => {
  return (
    <Card variant={'translucent'} size={'large'}>
      {/* <Card.Header title="To-do" titleSize={'5'} subtitle={'Stay on top of your daily tasks.'} subtitleSize={'2'} /> */}
      <Card.Body
        content={
          <Row gutter={[0, 8]}>
            <Col xs={24}>
              <Flex direction="column" width={'100%'} mb="1" justify={'space-between'}>
                <Row gutter={[0, 8]} width={'100%'} align="center">
                  <Col xs={24}>
                    <Typography.Header mb="2" size={'3'}>
                      Basic
                    </Typography.Header>
                  </Col>
                  <Col xs={12}>
                    <Typography.Text size={'3'} highContrast={false}>
                      Label
                    </Typography.Text>
                  </Col>
                  <Col xs={12}>
                    <TextField block />
                  </Col>

                  <Col xs={12}>
                    <Typography.Text size={'3'} highContrast={false}>
                      Type
                    </Typography.Text>
                  </Col>
                  <Col xs={12}>
                    <Tab.Root id="test-1" defaultValue="default">
                      <Tab.List block size={'small'} highContrast variant={'ios'}>
                        <Tab.Trigger value="default">Default</Tab.Trigger>
                        <Tab.Trigger value="sumbit">Submit</Tab.Trigger>
                      </Tab.List>
                    </Tab.Root>
                  </Col>

                  <Col xs={12}>
                    <Typography.Text size={'3'} highContrast={false}>
                      Size
                    </Typography.Text>
                  </Col>
                  <Col xs={12}>
                    <Tab.Root id="test-1" defaultValue="large">
                      <Tab.List block size={'small'} highContrast variant={'ios'}>
                        <Tab.Trigger value="small">Small</Tab.Trigger>
                        <Tab.Trigger value="large">Large</Tab.Trigger>
                      </Tab.List>
                    </Tab.Root>
                  </Col>
                </Row>
              </Flex>
            </Col>

            <Col xs={24}>
              <Divider my="2" />
            </Col>

            <Col xs={24}>
              <Flex direction="column" width={'100%'} mb="1" justify={'space-between'}>
                <Row gutter={[0, 8]}>
                  <Col xs={24}>
                    <Typography.Header mb="2" size={'3'}>
                      Basic
                    </Typography.Header>
                  </Col>
                  <Col xs={12}>
                    <Typography.Text size={'3'} highContrast={false}>
                      Type
                    </Typography.Text>
                  </Col>
                  <Col xs={12}>
                    <Tab.Root id="test-1" defaultValue="default">
                      <Tab.List size={'small'} highContrast variant={'ios'}>
                        <Tab.Trigger value="default">Default</Tab.Trigger>
                        <Tab.Trigger value="sumbit">Submit</Tab.Trigger>
                      </Tab.List>
                    </Tab.Root>
                  </Col>

                  <Col xs={12}>
                    <Typography.Text size={'3'} highContrast={false}>
                      Size
                    </Typography.Text>
                  </Col>
                  <Col xs={12}>
                    <Tab.Root id="test-1" defaultValue="large">
                      <Tab.List size={'small'} highContrast variant={'ios'}>
                        <Tab.Trigger value="small">Small</Tab.Trigger>
                        <Tab.Trigger value="large">Large</Tab.Trigger>
                      </Tab.List>
                    </Tab.Root>
                  </Col>

                  <Col xs={12}>
                    <Typography.Text size={'3'} highContrast={false}>
                      Type
                    </Typography.Text>
                  </Col>
                  <Col xs={12}>
                    <Tab.Root id="test-1" defaultValue="default">
                      <Tab.List size={'small'} highContrast variant={'ios'}>
                        <Tab.Trigger value="default">Default</Tab.Trigger>
                        <Tab.Trigger value="sumbit">Submit</Tab.Trigger>
                      </Tab.List>
                    </Tab.Root>
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

export default PanelCard;
