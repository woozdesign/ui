import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography from './Typography';
import { TitleProps, TextProps, ParagraphProps, TitleProps as SubtitleProps } from './Typography.props';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

// Title Story
const TitleTemplate: Story<TitleProps> = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <Typography.Title {...args} />
  </Theme.ThemeProvider>
);
export const DefaultTitle = TitleTemplate.bind({});
DefaultTitle.args = {
  children: 'Default Title',
  level: 1,
};

// Subtitle Story
const SubtitleTemplate: Story<SubtitleProps> = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
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

export const PrimaryText = TextTemplate.bind({});
PrimaryText.args = {
  children: 'Primary Text',
};

// Paragraph Story
const ParagraphTemplate: Story<ParagraphProps> = (args) => (
  <Theme.ThemeProvider appearance={'dark'}>
    <Typography.Paragraph {...args} />
  </Theme.ThemeProvider>
);
export const DefaultParagraph = ParagraphTemplate.bind({});
DefaultParagraph.args = {
  children: 'Default Paragraph',
};

export const PrimaryParagraph = ParagraphTemplate.bind({});
PrimaryParagraph.args = {
  children: 'Primary Paragraph',
};
