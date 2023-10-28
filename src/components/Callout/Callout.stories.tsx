// Callout.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Callout, { CalloutProps } from './Callout';
import { ThemeProvider } from '../Theme';
import { Icon, IconNames } from '@woozdesign/icons';

export default {
  title: 'Components/Callout',
  component: Callout,
} as Meta;

const Template: Story<CalloutProps> = (args) => (
  <ThemeProvider>
    <Callout {...args} />
  </ThemeProvider>
);

export const DefaultWithImage = Template.bind({});
DefaultWithImage.args = {
  children: 'Test',

  iconPrepend: <Icon type="Zap" />,
  iconAppend: <Icon type="Zap" />,
};
