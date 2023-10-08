import React from 'react';
import { Meta, Story } from '@storybook/react';
import AppBar, { AppBarProps } from './AppBar';
import Theme from '../Theme';
import '@/styles/core.scss';
import Layout from '../Layout/Layout';
import Button from '../Button';
import Image from '../Image';

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as Meta;

const Template: Story<AppBarProps> = (args) => {
  return (
    <Theme.ThemeProvider>
      <AppBar {...args}>
        <AppBar.Heading>
          <Image src="https://blog.woozlabs.com/favicon.png" width={'100%'} height={'100%'} />
        </AppBar.Heading>
        <AppBar.Body>Welcome to the app! You can perform various tasks here.</AppBar.Body>
        <AppBar.Action>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
          <Button>Action 3</Button>
        </AppBar.Action>
      </AppBar>

      <Layout.Container>
        <Layout.Row>
          <Layout.Col xs={12}>Test</Layout.Col>
        </Layout.Row>
      </Layout.Container>
    </Theme.ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
