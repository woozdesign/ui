import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { ThemeProvider } from '../Theme/Theme';
import Pagination from './Pagination';
import Button from '../Button';
import Flex from '../Flex';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story = (args) => {
  const recordsPerPage = 10;
  const totalRecords = 150; // For example purposes, you'd typically get this from an API or a data source.

  const onPageChanged = (pageNumber: number) => {
    console.log('pageNumber: ', pageNumber);
    // Fetch your data based on the pageNumber here or do any other logic you need.
  };

  return (
    <ThemeProvider>
      <Pagination {...args} totalRecords={totalRecords} recordsPerPage={recordsPerPage} onPageChanged={onPageChanged} currentPage={1} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
