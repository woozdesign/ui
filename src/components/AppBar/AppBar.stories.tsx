import React from 'react';
import { Meta, Story } from '@storybook/react';
import AppBar, { AppBarProps } from './AppBar';
import Theme from '../Theme';
import '@/styles/core.scss';
import Layout from '../Layout/Layout';
import Button from '../Button';
import Image from '../Image';
import Tab from '../Tab/Tab';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as Meta;

const Template: Story<AppBarProps> = (args) => {
  return (
    <Theme.ThemeProvider radius={'full'} scaling="90%">
      <AppBar {...args}>
        <AppBar.Heading>
          <a href="/">
            <Image src="https://blog.woozlabs.com/assets/icons/logo.svg" width={120}></Image>
          </a>
        </AppBar.Heading>
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
          <Button variant={'icon'} highContrast>
            <Icon type={'Github'} />
          </Button>
          <Button variant={'icon'} highContrast>
            <Icon type={'Sun'} />
          </Button>
        </AppBar.Action>
      </AppBar>

      <AppBar {...args}>
        <AppBar.Heading>
          <a href="/">
            <Image src="https://blog.woozlabs.com/assets/icons/logo.svg" width={120}></Image>
          </a>
        </AppBar.Heading>
        <AppBar.Action>
          <Button variant={'text'} highContrast>
            Documentation
          </Button>
          <Button variant={'text'} highContrast>
            Playground
          </Button>
          <Button variant={'icon'} highContrast>
            <Icon type={'Github'} />
          </Button>
          <Button variant={'icon'} highContrast>
            <Icon type={'Sun'} />
          </Button>
        </AppBar.Action>
      </AppBar>

      <AppBar {...args}>
        <AppBar.Heading>
          <a href="/">
            <Image src="https://blog.woozlabs.com/assets/icons/logo.svg" width={120}></Image>
          </a>
        </AppBar.Heading>
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
