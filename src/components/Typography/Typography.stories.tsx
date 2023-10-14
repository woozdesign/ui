import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography from './Typography';
import { TextProps, HeaderProps } from './Typography.props';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

// Typography Story
const TypographyTemplate: Story = (args) => (
  <ThemeProvider appearance={'light'}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((level) => {
      return (
        <Typography.Header key={level} size={level}>
          Header
        </Typography.Header>
      );
    })}

    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((size) => {
      return (
        <Typography.Text key={size} size={size} variant={'div'}>
          Text
        </Typography.Text>
      );
    })}
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((size) => {
      return (
        <Typography.Code key={size} size={size}>
          Code
        </Typography.Code>
      );
    })}
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((size) => {
      return (
        <Typography.Link key={size} size={size}>
          Link
        </Typography.Link>
      );
    })}
  </ThemeProvider>
);
export const TypographyFull = TypographyTemplate.bind({});
TypographyFull.args = {};

// Title Story
const TitleTemplate: Story<HeaderProps> = (args) => (
  <ThemeProvider appearance={'light'}>
    <Typography.Header {...args} />
  </ThemeProvider>
);

export const DefaultTitle = TitleTemplate.bind({});
DefaultTitle.args = {
  children: 'Default Title',
  size: 6,
};

// Text Story
const TextTemplate: Story<TextProps> = (args) => (
  <ThemeProvider appearance={'light'}>
    <Typography.Text {...args} />
  </ThemeProvider>
);
export const DefaultText = TextTemplate.bind({});
DefaultText.args = {
  children: 'Default Text',
};

// Text Card Story
const TextCardTemplate: Story<TextProps> = (args) => (
  <ThemeProvider appearance={'light'}>
    <Typography.Text variant="div" weight={'bolder'}>
      Get started
    </Typography.Text>
    <Typography.Text color="gray" highContrast={false}>
      Start your next project in minutes
    </Typography.Text>
  </ThemeProvider>
);
export const TextCard = TextCardTemplate.bind({});
TextCard.args = {
  children: 'Default Text',
};
