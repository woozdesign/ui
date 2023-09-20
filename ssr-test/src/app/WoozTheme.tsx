'use client';

import { useState, type PropsWithChildren } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { Theme } from '@woozdesign/ui';
import '@woozdesign/ui/dist/styles.css';

export const RootStyleRegistry = ({ children }: PropsWithChildren) => {
  return <Theme.ThemeProvider appearance="light">{children}</Theme.ThemeProvider>;
};
