import '@/styles/core.scss';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Col, Row } from '../Grid/Grid';
import { Container } from '../Layout/Layout';
import { ThemeProvider } from '../Theme';
import Anchor, { AnchorProps } from './Anchor';

export default {
  title: 'Components/Anchor',
  component: Anchor,
} as Meta;

const Template: Story<AnchorProps> = (args) => {
  return (
    <ThemeProvider>
      <Container>
        <Row>
          <Col xs={12}>
            <div style={{ height: '150vh', padding: '20px' }}>
              <section id="1components-anchor-demo-basic" style={{ height: '50vh' }}>
                <h2>Basic demo</h2>
                <p>Some content here...</p>
              </section>
              <section id="1components-anchor-demo-static" style={{ height: '50vh' }}>
                <h2>Static demo</h2>
                <p>More content here...</p>
              </section>
              <section id="aaapi" style={{ height: '200vh' }}>
                <h2>API</h2>
                <p>API content...</p>
                <section id="anchor-props" style={{ height: '100vh' }}>
                  <h3>Anchor Props</h3>
                  <p>Details about Anchor Props...</p>
                </section>
                <section id="link-props" style={{ height: '50vh' }}>
                  <h3>Link Props</h3>
                  <p>Details about Link Props...</p>
                </section>
              </section>
            </div>
          </Col>
          <Col xs={12}>
            <div
              style={{
                top: '128px',
                position: 'fixed',
                overflowY: 'auto',
                height: '100%',
                textAlign: top === '128px' ? 'end' : 'start',
              }}
            >
              <Anchor {...args} />
            </div>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      key: '1',
      href: '#1components-anchor-demo-basic',
      title: 'Basic demo',
    },
    {
      key: '2',
      href: '#1components-anchor-demo-static',
      title: 'Static demo LONG TITLE',
    },
    {
      key: 'aaapi',
      href: '#aaapi',
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
