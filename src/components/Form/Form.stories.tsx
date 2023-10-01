import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Form from './Form';
import TextField from '../TextField';
import Button from '../Button';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';
import TextArea from '../TextArea/TextArea';

export default {
  title: 'Components/Form',
  component: Form,
} as Meta;

const Template: Story = (args) => {
  const [inputValue, setInputValue] = useState('');
  const [requiredValue, setRequiredValue] = useState('');

  const [requiredValue2, setRequiredValue2] = useState('');

  const [requiredValue3, setRequiredValue3] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleFormError = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Theme.ThemeProvider>
      <Form onSuccess={handleFormSubmit} onError={handleFormError} {...args}>
        <TextField id="choose" label="Would you prefer a banana or cherry?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <TextField id="choose" label="This is required" required value={requiredValue} onChange={(e) => setRequiredValue(e.target.value)} />
        <TextField id="choose" label="This is required too" pattern="^[A-Za-z]+$" required value={requiredValue2} onChange={(e) => setRequiredValue2(e.target.value)} />
        <TextArea id="choose" label="This is Text Area" required value={requiredValue3} onChange={(e) => setRequiredValue3(e.target.value)} />
        <Button buttonType={'submit'}>Submit</Button>
      </Form>
    </Theme.ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithPrefilledValue = Template.bind({});
WithPrefilledValue.args = {};
WithPrefilledValue.decorators = [
  (Story) => {
    const [inputValue, setInputValue] = useState('banana');
    return <Story inputValue={inputValue} setInputValue={setInputValue} />;
  },
];

export const DisabledInput = Template.bind({});
DisabledInput.args = {};
DisabledInput.decorators = [
  (Story) => {
    return (
      <Form onSuccess={handleFormSubmit} onError={handleFormError} {...args}>
        <TextField id="choose" name="i-like" label="Would you prefer a banana or cherry?" required disabled />
        <Button buttonType={'submit'}>Submit</Button>
      </Form>
    );
  },
];
