import React from 'react';
import { Meta, Story } from '@storybook/react';

import '@/styles/core.scss';
import Layout from '../components/Layout/Layout';
import Theme from '../components/Theme/Theme';
import { COLOR_SCALES } from '../components/Theme/ThemeOptions';
import Card from '../components/Card';

export default {
  title: 'Theme/Color',
  args: {
    outlined: true,
    children: (
      <>
        <Layout.Container>
          <Layout.Row>
            <Layout.Col>asdf</Layout.Col>
          </Layout.Row>
        </Layout.Container>
      </>
    ),
  },
} as Meta;

const Template: Story = () => {
  const colors: string[] = COLOR_SCALES;
  return (
    <Theme.ThemeProvider>
      <Layout.Container>
        <Layout.Row>
          {colors.map((color) => {
            return [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120].map((shade) => {
              return (
                <Layout.Col key={`${color}-${shade}`} xs={2}>
                  <div
                    style={{
                      backgroundColor: `var(--color-${color}-${shade})`,
                      aspectRatio: '1/1',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: `var(--color-${color}-${130 - shade})`,
                      fontSize: 'var(--font-size-2)',
                    }}
                  >
                    {color}-{shade}
                  </div>
                </Layout.Col>
              );
            });
          })}
        </Layout.Row>
      </Layout.Container>
    </Theme.ThemeProvider>
  );
};

export const Palette = Template.bind({});
Palette.args = {};
