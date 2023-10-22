import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';
import Button from '../Button';
import { ThemeProvider } from '../Theme/Theme';
import Typography from '../Typography/Typography';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    outlined: true,
    children: (
      <>
        <Card.Header title="Default Title" />
        <Card.Body content="Default card content." />
      </>
    ),
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <ThemeProvider scaling="110%">
    <Card {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    console.log('called');
  },
  textAlign: 'end',
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

export const FullContent = Template.bind({});
FullContent.args = {
  children: (
    <>
      <Card.Header
        title={'test'}
        action={
          <Button variant={'text'} color={'lime'}>
            more
          </Button>
        }
        align={'end'}
      />
      <Card.Header
        title="Card Title"
        subtitle="Subtitle here"
        action={
          <Button variant={'text'} color={'lime'}>
            more
          </Button>
        }
      />
      <Card.Body title="Body Title" content="This is the main content of the card." />
      <Card.Action justify={'space-between'}>
        <Button highContrast color={'gray'}>
          Action 1
        </Button>
        <Button color={'red'}>Action 2</Button>
      </Card.Action>
    </>
  ),
};
export const OnlyContent = Template.bind({});
OnlyContent.args = {
  children: (
    <>
      <Card.Body title="Body Title" content="This is the main content of the card." />
      <Card.Action outlined={true}>
        <Button href="/"> Action 1</Button>
        <Button color={'blue'}>Action 2</Button>
      </Card.Action>
    </>
  ),
};
export const Test = Template.bind({});
Test.args = {
  children: (
    <>
      <Card.Header title="Card Title" subtitle="Subtitle here" />
      <Card.Body content="This is the content of the card." />
      <Card.Action justify={'end'}>
        <Button variant={'outlined'} color={'gray'}>
          Action 1
        </Button>
        <Button>Action 2</Button>
      </Card.Action>
    </>
  ),
};
// ...add more stories as needed
