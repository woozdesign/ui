'use client';

import { Icon } from '@woozdesign/icons';
import styles from './page.module.css';
import { AppBar, Button, Drawer, IconButton, Image, Layout, Tab, Typography, useNotification, useToast } from '@woozdesign/ui';

export default function Home() {
  const [openNotification, NotificationProvider] = useToast();
  const triggerNotification = () => {
    openNotification({
      message: 'Notification Title',
      highContrast: true,
    });
  };
  return (
    <>
      <AppBar position={'fixed'} variant={'translucent'}>
        <AppBar.Heading></AppBar.Heading>
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
          <Button variant={'text'} highContrast>
            Playground
          </Button>
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
