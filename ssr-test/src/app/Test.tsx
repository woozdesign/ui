import { Button, DropdownMenu, useShortcut, useTest } from '../../../dist';

import { FC } from 'react';

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  return (
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
  );
};

export default Test;
