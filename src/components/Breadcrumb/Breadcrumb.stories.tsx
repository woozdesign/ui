import React from 'react';
import { Meta, Story } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';
import Theme from '../Theme';
import '@/styles/core.scss';
import Layout from '../Layout/Layout';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => {
  return (
    <Theme.ThemeProvider>
      <Layout.Container>
        <Layout.Row>
          <Layout.Col xs={12}>
            <Breadcrumb {...args} />
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    </Theme.ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      key: '1',
      href: '#1components-Breadcrumb-demo-basic',
      title: 'Basic demo',
      active: true,
    },
    {
      key: '2',
      href: '#1components-Breadcrumb-demo-static',
      title: 'Static demo LONG TITLE',
      active: true,
    },
    {
      key: 'aaapi',
      href: '#aaapi',
      title: 'API',
      active: false,
    },
  ],
};
