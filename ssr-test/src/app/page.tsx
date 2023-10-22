'use client';

import { Icon } from '@woozdesign/icons';
import { AppBar, Badge, Button, Container, Drawer, IconButton, Row, Tab, Typography, updateThemeAppearanceClass, useThemeContext, useToast } from '@woozdesign/ui';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <main style={{ marginTop: '64px' }}>
        <Container>
          <Row>
            <Badge mt={{ xs: '0', md: '6', lg: '12' }} label={'Badge Test'}></Badge>
          </Row>
          <Row>Test</Row>
        </Container>
      </main>
    </>
  );
}
