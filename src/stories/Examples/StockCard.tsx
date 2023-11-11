import React, { FC, useState } from 'react';
import { Button, Card, Checkbox, Col, Divider, Flex, Row, Tab, Table, TextField, Typography } from '../../components';

interface StockCardProps {}

const StockCard: FC<StockCardProps> = ({}) => {
  return (
    <Card variant={'translucent'} size={'large'}>
      {/* <Card.Header title="To-do" titleSize={'5'} subtitle={'Stay on top of your daily tasks.'} subtitleSize={'2'} /> */}
      <Card.Body
        content={
          <Tab.Root id="stock-example-1" defaultValue="summary">
            <Row gutter={[0, 8]}>
              <Col xs={24}>
                <Flex direction="column" width={'100%'} mb="1" justify={'space-between'}>
                  <Row gutter={[0, 8]} width={'100%'} align="center">
                    <Col xs={24}>
                      <Typography.Header mb="2" size={'3'}>
                        <Tab.List block size={'small'} highContrast variant={'ios'}>
                          <Tab.Trigger value="summary">Summary</Tab.Trigger>
                          <Tab.Trigger value="financials">Financials</Tab.Trigger>
                        </Tab.List>
                      </Typography.Header>
                    </Col>
                  </Row>
                </Flex>
              </Col>

              <Tab.Content value="summary">
                <Col xs={24}>
                  <Flex direction="column" width={'100%'} mb="1" justify={'space-between'}>
                    <Row gutter={[0, 8]} width={'100%'}>
                      <Col xs={24}>
                        <Typography.Header size={'3'}>Key statistics</Typography.Header>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text size={'3'} highContrast={false}>
                          Previous Close
                        </Typography.Text>
                      </Col>
                      <Col xs={12} align="end">
                        <Typography.Text size={'3'}>73.23</Typography.Text>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text size={'3'} highContrast={false}>
                          Open
                        </Typography.Text>
                      </Col>
                      <Col xs={12} align="end">
                        <Typography.Text size={'3'}>74.63</Typography.Text>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text size={'3'} highContrast={false}>
                          Volume
                        </Typography.Text>
                      </Col>
                      <Col xs={12} align="end">
                        <Typography.Text size={'3'}>241,465</Typography.Text>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text size={'3'} highContrast={false}>
                          Avg. Volume (3M)
                        </Typography.Text>
                      </Col>
                      <Col xs={12} align="end">
                        <Typography.Text size={'3'}>182,881</Typography.Text>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text size={'3'} highContrast={false}>
                          Market Cap
                        </Typography.Text>
                      </Col>
                      <Col xs={12} align="end">
                        <Typography.Text size={'3'}>-</Typography.Text>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text size={'3'} highContrast={false}>
                          P/E Ratio (TTM)
                        </Typography.Text>
                      </Col>
                      <Col xs={12} align="end">
                        <Typography.Text size={'3'}>56.13</Typography.Text>
                      </Col>
                    </Row>
                  </Flex>
                </Col>

                <Col xs={24}>
                  <Divider my="4" />
                </Col>

                <Col xs={24}>
                  <Typography.Header mb="2" size={'3'}>
                    Holdings
                  </Typography.Header>
                </Col>
                <Col xs={24}>
                  <Card radius="small" shadow="0" variant={'transparent'}>
                    <Table.Root>
                      <Table.Header>
                        <Table.Row>
                          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>%Assets</Table.ColumnHeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <Table.Row>
                          <Table.RowHeaderCell>AMD</Table.RowHeaderCell>
                          <Table.Cell>6.67%</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.RowHeaderCell>GOOGL</Table.RowHeaderCell>
                          <Table.Cell>6.67%</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.RowHeaderCell>AMZN</Table.RowHeaderCell>
                          <Table.Cell>6.67%</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table.Root>

                    <Button radius={'none'} block variant={'transparent'}>
                      Show all holdings
                    </Button>
                  </Card>
                </Col>
              </Tab.Content>

              <Tab.Content value="financials">
                <Col xs={24}>
                  <Flex direction="column" width={'100%'} mb="1" justify={'space-between'}>
                    <Row gutter={[8, 8]} width={'100%'}>
                      <Col xs={24}>
                        <Typography.Header size={'3'}>Performance</Typography.Header>
                        <Typography.Text size={'3'} highContrast={false}>
                          Daily Total Return
                        </Typography.Text>
                      </Col>
                      <Col xs={24}></Col>
                      <Col xs={6}>
                        <Card>
                          <Card.Body
                            content={
                              <Flex direction={'column'} align="center">
                                <Typography.Header size={'4'} color="grass" highContrast={false}>
                                  +244.96%
                                </Typography.Header>

                                <Typography.Text size={'3'} highContrast={false}>
                                  YTD
                                </Typography.Text>
                              </Flex>
                            }
                          ></Card.Body>
                        </Card>
                      </Col>
                      <Col xs={6}>
                        <Card>
                          <Card.Body
                            content={
                              <Flex direction={'column'} align="center">
                                <Typography.Header size={'4'} color="grass" highContrast={false}>
                                  +232.41%
                                </Typography.Header>
                                <Typography.Text size={'3'} highContrast={false}>
                                  1 Year
                                </Typography.Text>
                              </Flex>
                            }
                          ></Card.Body>
                        </Card>
                      </Col>
                      <Col xs={6}>
                        <Card>
                          <Card.Body
                            content={
                              <Flex direction={'column'} align="center">
                                <Typography.Header size={'4'}>0%</Typography.Header>

                                <Typography.Text size={'3'} highContrast={false}>
                                  3 Year
                                </Typography.Text>
                              </Flex>
                            }
                          ></Card.Body>
                        </Card>
                      </Col>
                      <Col xs={6}>
                        <Card>
                          <Card.Body
                            content={
                              <Flex direction={'column'} align="center">
                                <Typography.Header size={'4'}>0%</Typography.Header>

                                <Typography.Text size={'3'} highContrast={false}>
                                  5 Year
                                </Typography.Text>
                              </Flex>
                            }
                          ></Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Flex>
                </Col>
              </Tab.Content>
            </Row>
          </Tab.Root>
        }
      ></Card.Body>
    </Card>
  );
};

export default StockCard;
