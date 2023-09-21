// import { Button } from '@nextui-org/react';
// import { Button } from '@radix-ui/themes/dist/cjs/components/button';
// import { Switch } from '@radix-ui/react-switch';
import { Button, Flex, Switch } from '@radix-ui/themes';
import { useTheme } from 'next-themes';


// import { AppType } from "next/app";
// import Image from 'next/image';

export default function ThemeButton() {
  const { setTheme } = useTheme()
  return (
    <main>
      <div>
      <Switch radius="full" defaultChecked onClick={() => setTheme('dark')}/>
        {/* <Button onClick={() => setTheme('dark')}>
        </Button> */}
        <Button onClick={() => setTheme('light')}></Button>
      </div>

      <Flex gap="3">
        <Switch radius="none" defaultChecked />
        <Switch radius="large" defaultChecked />
        <Switch radius="full" defaultChecked />
      </Flex>
    </main>
  )
}
