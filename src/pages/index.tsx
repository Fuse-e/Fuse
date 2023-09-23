// import { AppType } from "next/app";
// import { Button } from '@nextui-org/react';
// import { Card } from "@radix-ui/themes";

import { Children } from "react";
import { Header } from "~/components/Header";
import { Container } from "~/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "~/components/hero";
// import Image from "next/image"

// import { Box, Button, Card, Flex, Inset, Kbd } from "@radix-ui/themes";

// import { MyButton } from "~/components/ui/myButton";
// import { Search } from "~/components/ui/search";


export default function Home() {
  return (
    <div>
      {/* <Header >
        <Container>header</Container>
      </Header> */}
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Fuse helps to Amplify Your Developer Journey
            </HeroTitle>
            <HeroSubTitle>
             A better way to connect, colaborate and learn, <br /> using mordern software development
            </HeroSubTitle>
            <img src="/images/button.png"alt="Fuse helps to Amplify Your Developer Journey"/>
          </Hero>
        </Container>
      </main>
      <footer />
    </div>
  )
}
