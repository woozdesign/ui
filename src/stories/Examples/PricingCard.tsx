import { Icon } from '@woozdesign/icons';
import React, { FC } from 'react';
import { Button, Card, Col, Flex, Row, Typography } from '../../components';

interface PricingCardProps {}

const PricingCard: FC<PricingCardProps> = ({}) => {
  return (
    <Card variant={'translucent'} size={'large'}>
      <Card.Header title="Pricing" titleSize={'4'} subtitle={'No credit card required. Every plan includes a 30-day trial of all Pro features.'} subtitleSize={'2'} />
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
              <Button highContrast block variant={'solid'}>
                Upgrade
              </Button>
            </Col>
          </Row>
        }
      ></Card.Body>
    </Card>
  );
};

export default PricingCard;
