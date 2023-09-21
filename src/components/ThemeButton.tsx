import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';


// import { AppType } from "next/app";
// import Image from 'next/image';

export default function ThemeButton() {
  const { setTheme } = useTheme()
  return (
    <main>
      <div>
        <Button onClick={() => setTheme('dark')}></Button>
        <Button onClick={() => setTheme('light')}></Button>
      </div>
    </main>
  )
}
