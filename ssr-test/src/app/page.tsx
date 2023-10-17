'use client';

import { Icon } from '@woozdesign/icons';
import { AppBar, Button, Container, Drawer, IconButton, Row, Tab, Typography, updateThemeAppearanceClass, useThemeContext, useToast } from '@woozdesign/ui';
import { useState } from 'react';
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleOutside = () => {
    setIsOpen(!isOpen);
  };

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
      </AppBar>
      <main style={{ marginTop: '64px' }}>
        <Container>
          {NotificationProvider}
          <Row>
            <Test />
            <Button onClick={toggleOutside}>ToggleOutside</Button>
            <Drawer.Root isOpen={isOpen} onClose={toggleOutside} overlayVariant={'translucent'}>
              <Drawer.Content title="Header">Content</Drawer.Content>
            </Drawer.Root>

            <Typography.Link>Link</Typography.Link>
            <Typography.Code children={'Code'}></Typography.Code>
            <Typography.Text>Code</Typography.Text>
            <Button onClick={triggerNotification} color={'gray'} variant={'outlined'} highContrast>
              asdf
            </Button>
          </Row>
        </Container>
      </main>
    </>
  );
}
