import React from 'react';
import { Meta, Story } from '@storybook/react';
import Flex, { FlexProps } from './Flex';
import { ThemeProvider } from '../Theme';
import '@/styles/core.scss';
import Layout from '../Layout/Layout';
import Button from '../Button';

export default {
  title: 'Components/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => {
  return (
    <ThemeProvider>
      <Layout.Container>
        <Layout.Row>
          <Layout.Col xs={12}>
            <Flex {...args}>
              <Button>Test</Button>
              <Button>Test2</Button>
            </Flex>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
