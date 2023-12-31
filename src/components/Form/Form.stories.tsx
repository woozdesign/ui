import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Form from './Form';
import TextField from '../TextField';
import Button from '../Button';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';
import TextArea from '../TextArea/TextArea';
import Checkbox from '../Checkbox/Checkbox';
import Switch from '../Switch';
import Typography from '../Typography';

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
    <ThemeProvider>
      <Form id="form1" onSuccess={handleFormSubmit} onError={handleFormError} {...args}>
        <TextField id="1" label="Would you prefer a banana or cherry?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <TextField id="2" label="This is required" required value={requiredValue} onChange={(e) => setRequiredValue(e.target.value)} />
        <TextField id="3" label="This is required too" pattern="^[A-Za-z]+$" required value={requiredValue2} onChange={(e) => setRequiredValue2(e.target.value)} />
        <TextArea id="4" label="This is Text Area" required value={requiredValue3} onChange={(e) => setRequiredValue3(e.target.value)} />

        <Checkbox id="5" label="This is Checkbox" required />

        <Button buttonType={'submit'}>Submit</Button>
      </Form>
    </ThemeProvider>
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
