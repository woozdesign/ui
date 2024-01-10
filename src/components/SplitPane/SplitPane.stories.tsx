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
      {args.children}
    </Layout>
  </ThemeProvider>
);

export const TestCase_1 = Template.bind({});
TestCase_1.args = {
  children: (
    <SplitPane>
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
  ),
};

export const TestCase_2 = Template.bind({});
TestCase_2.args = {
  children: (
    <SplitPane size={100}>
      <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
        Content
      </Flex>
      <SplitPane minSize={50}>
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
          <SplitPane split={'horizontal'}>
            <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
              Content
            </Flex>
            <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
              Content
            </Flex>
          </SplitPane>
        </SplitPane>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
      </SplitPane>
    </SplitPane>
  ),
};

export const TestCase_3 = Template.bind({});
TestCase_3.args = {
  children: (
    <SplitPane size={100}>
      <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
        Content
      </Flex>
      <SplitPane minSize={50}>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
      </SplitPane>
    </SplitPane>
  ),
};
export const TestCase_4 = Template.bind({});
TestCase_4.args = {
  children: (
    <SplitPane minSize={100}>
      <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
        Content
      </Flex>
      <SplitPane split={'horizontal'} minSize={50}>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
        <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
          Content
        </Flex>
        <SplitPane minSize={80}>
          <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
            Content
          </Flex>
          <Flex direction={'column'} p={'4'} align="center" justify="center" height={'100%'}>
            Content
          </Flex>
        </SplitPane>
      </SplitPane>
    </SplitPane>
  ),
};
