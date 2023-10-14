import React from 'react';
import { Meta, Story } from '@storybook/react';
import AppBar, { AppBarProps } from './AppBar';
import { ThemeProvider } from '../Theme';
import '@/styles/core.scss';
import Layout from '../Layout/Layout';
import Button from '../Button';
import Image from '../Image';
import Tab from '../Tab/Tab';
import { Icon } from '@woozdesign/icons';
import IconButton from '../IconButton';
import Drawer from '../Drawer/Drawer';
import Card from '../Card';

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as Meta;

const Template: Story<AppBarProps> = (args) => {
  return (
    <ThemeProvider scaling="90%">
      <AppBar {...args} variant={'translucent'}>
        {/* <AppBar.Heading>
          <a href="/">
            <Image src="https://woozdesign-website.vercel.app/favicon.svg" width={36}></Image>
          </a>
        </AppBar.Heading> */}
        <AppBar.Body>
          <Tab.Root defaultValue="components">
            <Tab.List>
              <Tab.Trigger highContrast value="components">
                Components
              </Tab.Trigger>
              <Tab.Trigger highContrast value="icons">
                Icons
              </Tab.Trigger>
              <Tab.Trigger highContrast value="colors">
                Colors
              </Tab.Trigger>
            </Tab.List>
          </Tab.Root>
        </AppBar.Body>
        <AppBar.Action>
          <Button variant={'text'} highContrast>
            Documentation
          </Button>
          <Button variant={'text'} highContrast>
            Playground
          </Button>

          <IconButton variant={'text'} highContrast>
            <Icon type={'Github'} />
          </IconButton>
          <IconButton variant={'text'} highContrast>
            <Icon type={'Sun'} />
          </IconButton>
        </AppBar.Action>
        <AppBar.Action mobile>
          <Drawer.Root overlayVariant={'translucent'}>
            <Drawer.Trigger>
              <IconButton variant={'outlined'}>
                <Icon type={'Menu'} />
              </IconButton>
            </Drawer.Trigger>
            <Drawer.Content title="Header">Content</Drawer.Content>
          </Drawer.Root>
        </AppBar.Action>
      </AppBar>
      <main>
        <Layout.Container>
          <Layout.Row>
            <Layout.Col xs={12}>
              <Card>
                <Card.Heading title={'Title'} />
              </Card>
            </Layout.Col>
          </Layout.Row>
        </Layout.Container>
      </main>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
