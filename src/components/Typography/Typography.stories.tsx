import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography, { TitleProps, TextProps, ParagraphProps, TitleProps as SubtitleProps } from './Typography';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

// Title Story
const TitleTemplate: Story<TitleProps> = (args) => (
  <Theme.ThemeProvider>
    <Typography.Title {...args} />
  </Theme.ThemeProvider>
);
export const DefaultTitle = TitleTemplate.bind({});
DefaultTitle.args = {
  children: 'Default Title',
  level: 1,
};

export const SecondaryTitle = TitleTemplate.bind({});
SecondaryTitle.args = {
  children: 'Secondary Title',
  level: 2,
  type: 'primary',
};

// Subtitle Story
const SubtitleTemplate: Story<SubtitleProps> = (args) => (
  <Theme.ThemeProvider>
    <Typography.Subtitle {...args} />
  </Theme.ThemeProvider>
);
export const DefaultSubtitle = SubtitleTemplate.bind({});
DefaultSubtitle.args = {
  children: 'Default Subtitle',
  level: 6,
};

export const PrimarySubtitle = SubtitleTemplate.bind({});
PrimarySubtitle.args = {
  children: 'Primary Subtitle',
  level: 6,
  type: 'primary',
};

// Text Story
const TextTemplate: Story<TextProps> = (args) => (
  <Theme.ThemeProvider>
    <Typography.Text {...args} />
  </Theme.ThemeProvider>
);
export const DefaultText = TextTemplate.bind({});
DefaultText.args = {
  children: 'Default Text',
  type: 'default',
};

export const PrimaryText = TextTemplate.bind({});
PrimaryText.args = {
  children: 'Primary Text',
  type: 'primary',
};

// Paragraph Story
const ParagraphTemplate: Story<ParagraphProps> = (args) => (
  <Theme.ThemeProvider>
    <Typography.Paragraph {...args} />
  </Theme.ThemeProvider>
);
export const DefaultParagraph = ParagraphTemplate.bind({});
DefaultParagraph.args = {
  children: 'Default Paragraph',
  type: 'default',
};

export const PrimaryParagraph = ParagraphTemplate.bind({});
PrimaryParagraph.args = {
  children: 'Primary Paragraph',
  type: 'primary',
};
