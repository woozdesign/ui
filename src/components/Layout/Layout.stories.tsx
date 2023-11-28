import { Meta, Story } from '@storybook/react';
import React from 'react';

import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';
import Layout from './Layout';
import Card from '../Card';
import Flex from '../Flex';
import Typography from '../Typography/Typography';
import IconButton from '../IconButton';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Layout/Layout',
  component: Layout,
} as Meta;

// Combined Story with Container, Row, and Col
const Template: Story = (args) => <ThemeProvider>{args.children}</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  children: (
    <Layout>
      <Layout.Header>
        <Card>
          <Card.Header title={'header'} />
        </Card>
      </Layout.Header>
      <Layout>
        <Layout.Sider width={'12'} p={'4'}>
          <Flex direction={'column'} align="center" justify="center">
            <IconButton>
              <Icon type={'Zap'}></Icon>
            </IconButton>
            <IconButton>
              <Icon type={'Zap'}></Icon>
            </IconButton>
            <IconButton>
              <Icon type={'Zap'}></Icon>
            </IconButton>
            <IconButton>
              <Icon type={'Zap'}></Icon>
            </IconButton>
          </Flex>
        </Layout.Sider>
        <Layout.Content>
          <Card>
            <Card.Header title={'main'} />
          </Card>
        </Layout.Content>
      </Layout>
      <Layout.Footer>
        <Card>
          <Card.Header title={'footer'} />
        </Card>
      </Layout.Footer>
    </Layout>
  ),
};

export const LongContent = Template.bind({});
LongContent.args = {
  children: (
    <Layout>
      <Layout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          boxSizing: 'border-box',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Card>
          <Card.Header title={'Layout.sider'} />
        </Card>
      </Layout.Sider>

      <Layout style={{ marginLeft: 200, width: '100%' }}>
        <Layout.Header>
          <Card>
            <Card.Header title={'header'} />
          </Card>
        </Layout.Header>

        <Layout.Content>
          <Card>
            <div style={{ padding: 24, textAlign: 'center' }}>
              {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                  <React.Fragment key={index}>
                    <Typography.Text variant="div">{index % 20 === 0 && index ? 'more' : '...'}</Typography.Text>
                  </React.Fragment>
                ))
              }
            </div>
          </Card>
        </Layout.Content>

        <Layout.Footer>
          <Card>
            <Card.Header title={'footer'} />
          </Card>
        </Layout.Footer>
      </Layout>
    </Layout>
  ),
};
