import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';
import Button from '../Button';
import Theme from '../Theme/Theme';
import Typography from '../Typography/Typography';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    outlined: true,
    children: (
      <>
        <Card.Heading title="Default Title" />
        <Card.Body content="Default card content." />
      </>
    ),
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Theme.ThemeProvider scaling="110%">
    <Card {...args} />
  </Theme.ThemeProvider>
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
        title={<Typography.Title level={1}>test</Typography.Title>}
        action={
          <Button variant={'text'} color={'lime'}>
            more
          </Button>
        }
      />
      <Card.Heading
        title="Card Title"
        titleLevel={5}
        subtitle="Subtitle here"
        action={
          <Button variant={'text'} color={'lime'}>
            more
          </Button>
        }
      />
      <Card.Body title="Body Title" content="This is the main content of the card." />
      <Card.Actions justify={'space-between'}>
        <Button highContrast color={'gray'}>
          Action 1
        </Button>
        <Button color={'red'}>Action 2</Button>
      </Card.Actions>
    </>
  ),
};
export const OnlyContent = Template.bind({});
OnlyContent.args = {
  children: (
    <>
      <Card.Body title="Body Title" content="This is the main content of the card." />
      <Card.Actions outlined={true}>
        <Button href="/"> Action 1</Button>
        <Button color={'blue'}>Action 2</Button>
      </Card.Actions>
    </>
  ),
};

// ...add more stories as needed
