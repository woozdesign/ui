'use client';

import { Icon } from '@woozdesign/icons';
import styles from './page.module.css';
import {
  AppBar,
  Button,
  Drawer,
  DropdownMenu,
  IconButton,
  Image,
  Layout,
  Tab,
  Typography,
  updateThemeAppearanceClass,
  useNotification,
  useThemeContext,
  useToast,
} from '@woozdesign/ui';

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
            <DropdownMenu.Root>
              <DropdownMenu.Trigger shortcut={['Shift', 'O']}>
                <Button>Trigger</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>Trigger</DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item onClick={() => console.log('Clicked!')} shortcut={['Ctrl', 'Shift', 'A']}>
                      Item with Shortcut
                    </DropdownMenu.Item>

                    <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
                <DropdownMenu.Item shortcut={['Shift', 'E']} onClick={() => console.log('Edit')}>
                  Edit
                </DropdownMenu.Item>
                <DropdownMenu.Item shortcut={['Ctrl', 'D']} onClick={() => console.log('Duplicate!')}>
                  Duplicate
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut={['Ctrl', 'A']} onClick={() => console.log('Archive!')}>
                  Archive
                </DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item>Share</DropdownMenu.Item>
                <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>

                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger shortcut={['Ctrl', 'M']}>More</DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item shortcut={['Ctrl', 'M']} onClick={() => console.log('Move to project…')}>
                      Move to project…
                    </DropdownMenu.Item>
                    <DropdownMenu.Item shortcut={['Ctrl', 'E']} onClick={() => console.log('Archive')}>
                      Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>

                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut={['Ctrl', 'X']} onClick={() => console.log('Exit!')} color="red">
                  Delete
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
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
