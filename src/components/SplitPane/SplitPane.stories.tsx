import React from 'react';
import { Meta, Story } from '@storybook/react';
import SplitPane, { SplitPaneProps } from './SplitPane';
import Flex from '../Flex';
import Layout from '../Layout';
import { ThemeProvider } from '../Theme/Theme';
import '@/styles/core.scss';
import { Icon } from '@woozdesign/icons';

export default {
  title: 'Layout/SplitPane',
  component: SplitPane,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<SplitPaneProps> = (args) => (
  <ThemeProvider appearance={'light'} accentColor={'yellow'}>
    <Layout width={'100vw'} height={'100vh'}>
      <SplitPane split="vertical">
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
        <SplitPane split={'horizontal'}>
          <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
            Content
          </Flex>
          <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
            Content
          </Flex>
          <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
            Content
          </Flex>
          <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
            Content
          </Flex>
        </SplitPane>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
      </SplitPane>
    </Layout>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
