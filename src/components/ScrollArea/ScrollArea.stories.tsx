import '@/styles/core.scss';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Flex from '../Flex';
import { Col, Row } from '../Grid/Grid';
import { Container } from '../Layout/Layout';
import { ThemeProvider } from '../Theme/Theme';
import Typography from '../Typography';
import ScrollArea from './ScrollArea';

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
} as Meta;

// ScrollArea Story
const ScrollAreaTemplate: Story = (args) => (
  <ThemeProvider appearance={'light'}>
    <Container>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12}>
          <ScrollArea id={'test1'} type="always" persistent scrollbars="vertical" style={{ height: 150 }}>
            <Container>
              <Typography.Text size="2">
                {`Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
                synonymously, typographically they are separate but related concepts.`}
              </Typography.Text>

              <Typography.Text size="2">
                {`Legibility describes how easily individual ch aracters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>

              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
  and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>

              <Typography.Text size="4">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
  and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>

              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>
            </Container>
          </ScrollArea>
        </Col>
        <Col xs={24} sm={12}>
          <ScrollArea p={5} id={'test_2'} persistent type="always" scrollbars="horizontal" style={{ height: 150 }}>
            <Flex width={1200}>
              <Typography.Text size="12">
                {`Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
                synonymously, typographically they are separate but related concepts.`}
              </Typography.Text>
              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>
              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>
              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>
            </Flex>
          </ScrollArea>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);
export const Default = ScrollAreaTemplate.bind({});
Default.args = {};
