import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';
import Button from '../Button';
import ThemeProvider from '../Theme/Theme';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    outlined: true,
    children: (
      <>
        <Card.Heading title="Default Title" />
        <Card.Body description="Default card content." />
      </>
    ),
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <ThemeProvider>
    <Card {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

export const FullContent = Template.bind({});
FullContent.args = {
  children: (
    <>
      <Card.Heading
        title="Card Title"
        subtitle="Subtitle here"
        action={
          <Button type="text" color="secondary">
            more
          </Button>
        }
      />
      <Card.Body title="Body Title" description="This is the main content of the card." />
      <Card.Actions>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </Card.Actions>
    </>
  ),
};

// ...add more stories as needed
