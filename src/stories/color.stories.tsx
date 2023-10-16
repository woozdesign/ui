import { Meta, Story } from '@storybook/react';
import React from 'react';

import '@/styles/core.scss';
import { ThemeProvider } from '../components/Theme/Theme';
import { COLOR_SCALES } from '../components/Theme/ThemeOptions';
import { Container } from '../components/Layout/Layout';
import { Col, Row } from '../components/Grid/Grid';

export default {
  title: 'Theme/Color',
  args: {
    outlined: true,
  },
} as Meta;

const Template: Story = () => {
  const colors: string[] = COLOR_SCALES;

  return (
    <ThemeProvider>
      <Container>
        <Row>
          {colors.map((color) => {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12'].map((shade) => {
              return (
                <Col key={`${color}-${shade}`} xs={2}>
                  <div
                    style={{
                      backgroundColor: `var(--color-${color}-${shade})`,
                      aspectRatio: '1/1',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: `var(--color-${color}-${13 - shade})`,
                      fontSize: 'var(--font-size-2)',
                    }}
                  >
                    {color}-{shade}
                  </div>
                </Col>
              );
            });
          })}
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export const Palette = Template.bind({});
Palette.args = {};
