'use client';

import { Icon } from '@woozdesign/icons';
import { AppBar, Button, Drawer, IconButton, Layout, ShortcutProvider, Tab, TestProvider, Typography, updateThemeAppearanceClass, useThemeContext, useToast } from '@woozdesign/ui';
import { useEffect, useState } from 'react';
import Test from './test';

export default function Home() {
  const [openNotification, NotificationProvider] = useToast();

  const { appearance, onAppearanceChange } = useThemeContext();
  const triggerNotification = () => {
    openNotification({
      message: 'Notification Title',
      highContrast: true,
    });
  };

  const toggleAppearance = () => {
    console.log('toggleAppearance: ', appearance);
    if (appearance === 'light') {
      updateThemeAppearanceClass('dark');
      onAppearanceChange('dark');
    } else if (appearance === 'dark') {
      updateThemeAppearanceClass('light');
      onAppearanceChange('light');
    }
  };

  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
    console.log('render: ', render);
  }, [render]);
  if (!render) return null;

  return (
    <>
      <AppBar position={'fixed'} variant={'translucent'}>
        <AppBar.Header>
          <Button onClick={toggleAppearance}>toggleAppearance</Button>
        </AppBar.Header>
        <AppBar.Body>
          <Tab.Root defaultValue={''}>
            <Tab.List>
              <Tab.Trigger onClick={() => router.push('/docs/ui/overview/get-started')} highContrast value="ui">
                UI
              </Tab.Trigger>
              <Tab.Trigger onClick={() => router.push('/docs/icons/overview/get-started')} highContrast value="icons">
                Icons
              </Tab.Trigger>
              <Tab.Trigger onClick={() => router.push('/docs/colors/overview/get-started')} highContrast value="colors">
                Colors
              </Tab.Trigger>
            </Tab.List>
          </Tab.Root>
        </AppBar.Body>
        <AppBar.Action>
          <Button onClick={() => window.open('https://blog.woozlabs.com', '_blank')} variant={'text'} highContrast>
            Blog
          </Button>
          <IconButton onClick={() => window.open('https://github.com/woozlabs/woozdesign-ui', '_blank')} variant={'text'} highContrast>
            <Icon type={'Github'} />
          </IconButton>
          <IconButton variant={'text'} highContrast>
            <Icon type={'Aperture'} />
          </IconButton>
        </AppBar.Action>

        <AppBar.Action mobile>
          <Drawer.Root overlayVariant={'translucent'}>
            <Drawer.Trigger>
              <IconButton variant={'outlined'}>
                <Icon type={'Menu'} />
              </IconButton>
            </Drawer.Trigger>
            <Drawer.Content title="Header">Content</Drawer.Content>
          </Drawer.Root>
        </AppBar.Action>
      </AppBar>
      <main style={{ marginTop: '64px' }}>
        <Layout.Container>
          {NotificationProvider}
          <Layout.Row>
            <Test />

            <Typography.Link>Link</Typography.Link>
            <Typography.Code children={'Code'}></Typography.Code>
            <Typography.Text>Code</Typography.Text>
            <Button onClick={triggerNotification} color={'gray'} variant={'outlined'} highContrast>
              asdf
            </Button>
          </Layout.Row>
        </Layout.Container>
      </main>
    </>
  );
}
