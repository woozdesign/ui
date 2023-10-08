import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box, { BoxProps } from './Box';
import Theme from '../Theme';
import '@/styles/core.scss';
import Layout from '../Layout/Layout';
import Button from '../Button';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => {
  return (
    <Theme.ThemeProvider>
      <Layout.Container>
        <Layout.Row>
          <Layout.Col xs={12}>
            <Box {...args}>
              <Button>Test</Button>
              <Button>Test2</Button>
            </Box>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    </Theme.ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
