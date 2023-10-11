import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table from './Table';
import { ThemeProvider } from '../Theme/Theme';
import './Table.module.scss';

export default {
  title: 'Components/Table',
  component: Table.Root,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider>
    <Table.Root {...args}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Leo Kim</Table.RowHeaderCell>
          <Table.Cell>kim.kw8012@gmail.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
          <Table.Cell>jasper@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
