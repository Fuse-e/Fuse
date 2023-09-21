// import { AppType } from "next/app";
// import { Button } from '@nextui-org/react';

import { MyButton } from "~/components/ui/myButton";
import { Search } from "~/components/ui/search";



export default function Home() {
  return (
    <main>
      <h1>utduc</h1>
      <MyButton color="olive" > hello world</MyButton>
      <Search />
    </main>
  )
}
