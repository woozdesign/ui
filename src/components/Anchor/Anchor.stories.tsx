import React from 'react';
import { Meta, Story } from '@storybook/react';
import Anchor, { AnchorProps } from './Anchor';
import Theme from '../Theme';
import '@/styles/core.scss';

export default {
  title: 'Components/Anchor',
  component: Anchor,
} as Meta;

const Template: Story<AnchorProps> = (args) => {
  return (
    <Theme.ThemeProvider>
      <div style={{ position: 'fixed', right: 0 }}>
        <Anchor {...args} />
      </div>
      <div style={{ height: '150vh', padding: '20px' }}>
        <section id="components-anchor-demo-basic">
          <h2>Basic demo</h2>
          <p>Some content here...</p>
        </section>
        <section id="components-anchor-demo-static">
          <h2>Static demo</h2>
          <p>More content here...</p>
        </section>
        <section id="api">
          <h2>API</h2>
          <p>API content...</p>
          <section id="anchor-props">
            <h3>Anchor Props</h3>
            <p>Details about Anchor Props...</p>
          </section>
          <section id="link-props">
            <h3>Link Props</h3>
            <p>Details about Link Props...</p>
          </section>
        </section>
      </div>
    </Theme.ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      key: '1',
      href: '#components-anchor-demo-basic',
      title: 'Basic demo',
    },
    {
      key: '2',
      href: '#components-anchor-demo-static',
      title: 'Static demo',
    },
    {
      key: '3',
      href: '#api',
      title: 'API',
      children: [
        {
          key: '4',
          href: '#anchor-props',
          title: 'Anchor Props',
        },
        {
          key: '5',
          href: '#link-props',
          title: 'Link Props',
        },
      ],
    },
  ],
};
