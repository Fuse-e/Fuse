import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head"; // Import the Head component
// import { ThemeProvider } from 'next-themes'
import {ThemeProvider } from "next-themes";
// import {NextUIProvider} from '@nextui-org/react'
import { Theme } from '@radix-ui/themes';

import { api } from "~/utils/api";

import "~/styles/globals.css";
import '@radix-ui/themes/styles.css';
import { Header } from "~/components/Header";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
      <ThemeProvider attribute="class">
        <Theme accentColor="orange" grayColor="slate" panelBackground="solid" radius="large" scaling="95%">
          <SessionProvider session={session}>
            <Head> {/* Replace <head> with <Head> */}
              <title>Flame ⚡</title>
              <meta name="description" content="Showcase your project as a developer"/>
              <link rel="icon" href="/favicon.ico" />
            </Head> {/* Close the <Head> component */}
            <div className="">
              <Header />
              <Component {...pageProps} />
            </div>
          </SessionProvider>
        </Theme>
      </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
