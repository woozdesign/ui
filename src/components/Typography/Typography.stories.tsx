import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography from './Typography';
import { TextProps, HeadingProps } from './Typography.props';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

// Typography Story
const TypographyTemplate: Story = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((level) => {
      return (
        <Typography.Heading key={level} size={level}>
          Heading
        </Typography.Heading>
      );
    })}

    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((size) => {
      return (
        <Typography.Text key={size} size={size} variant={'div'}>
          Text
        </Typography.Text>
      );
    })}
  </Theme.ThemeProvider>
);
export const TypographyFull = TypographyTemplate.bind({});
TypographyFull.args = {};

// Title Story
const TitleTemplate: Story<HeadingProps> = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <Typography.Heading {...args} />
  </Theme.ThemeProvider>
);

export const DefaultTitle = TitleTemplate.bind({});
DefaultTitle.args = {
  children: 'Default Title',
  size: 6,
};

// Text Story
const TextTemplate: Story<TextProps> = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <Typography.Text {...args} />
  </Theme.ThemeProvider>
);
export const DefaultText = TextTemplate.bind({});
DefaultText.args = {
  children: 'Default Text',
};

// Text Card Story
const TextCardTemplate: Story<TextProps> = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <Typography.Text size="3" variant="p" weight={'bolder'}>
      Get started
    </Typography.Text>
    <Typography.Text color="gray" size="2" variant="div" highContrast={false}>
      Start your next project in minutes
    </Typography.Text>
  </Theme.ThemeProvider>
);
export const TextCard = TextCardTemplate.bind({});
TextCard.args = {
  children: 'Default Text',
};
