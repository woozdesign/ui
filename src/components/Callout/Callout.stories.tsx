// Callout.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Callout, { CalloutProps } from './Callout';
import { ThemeProvider } from '../Theme';
import { Icon, IconNames } from '@woozdesign/icons';
import Flex from '../Flex';

export default {
  title: 'Components/Callout',
  component: Callout,
} as Meta;

const Template: Story<CalloutProps> = (args) => (
  <ThemeProvider>
    <Flex direction="column">
      <Callout {...args} />
      <Callout {...args} />
      <Callout {...args} />
    </Flex>
  </ThemeProvider>
);

export const DefaultWithImage = Template.bind({});
DefaultWithImage.args = {
  children: 'Test',

  iconPrepend: <Icon type="Zap" />,
  iconAppend: <Icon type="Zap" />,
};
