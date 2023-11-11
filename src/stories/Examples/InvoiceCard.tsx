import { Icon } from '@woozdesign/icons';
import React, { FC } from 'react';
import { Button, Card, Flex, Typography } from '../../components';

interface InvoiceCardProps {}

const InvoiceCard: FC<InvoiceCardProps> = ({}) => {
  return (
    <Card variant={'translucent'} size={'large'}>
      <Card.Body
        content={
          <Flex direction="column" align="center" justify={'center'}>
            <Icon type={'CheckCircle'} color={'grass'} size={'large'} />
            <Typography.Text align="center" weight="bold" size={'4'}>
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
          <Button highContrast block>
            Receipt
          </Button>
          <Button block variant={'outlined'}>
            Done
          </Button>
        </Flex>
      </Card.Action>
    </Card>
  );
};

export default InvoiceCard;
