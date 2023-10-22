'use client';

import { Icon } from '@woozdesign/icons';
import { AppBar, Badge, Button, Card, Container, Drawer, IconButton, Row, Tab, Typography, updateThemeAppearanceClass, useThemeContext, useToast } from '@woozdesign/ui';
import { useState } from 'react';

export default function Home() {
  const { appearance, onAppearanceChange } = useThemeContext();
  const onAppearanceToggle = () => {
    console.log('appearance: ', appearance);
    if (appearance === 'dark') {
      onAppearanceChange('light');
    } else {
      onAppearanceChange('dark');
    }
  };
  return (
    <>
      <main style={{ marginTop: '64px' }}>
        <Container>
          <Row>
            <Badge mt={{ xs: '0', md: '6', lg: '12' }} label={'Badge Test'}></Badge>
          </Row>
          <Row>
            <Typography.Header>Playground</Typography.Header>
            <Button onClick={onAppearanceToggle}>Toggle</Button>
          </Row>
        </Container>
      </main>
    </>
  );
}
