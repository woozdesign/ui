import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';
import Button from '../Button';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    outlined: false,
    backgroundColor: '',
    children: (
      <>
        <Card.Title>Default Title</Card.Title>
        <Card.Text>Default card content.</Card.Text>
      </>
    ),
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  backgroundColor: 'lightblue',
};

export const FullContent = Template.bind({});
FullContent.args = {
  children: (
    <>
      <Card.Title level={3}>Card Title</Card.Title>
      <Card.Subtitle>Subtitle here</Card.Subtitle>
      <Card.Text>This is the main content of the card.</Card.Text>
      <Card.Actions>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </Card.Actions>
    </>
  ),
};

// ...add more stories as needed
