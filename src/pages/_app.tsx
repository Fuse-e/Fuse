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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SessionProvider session={session}>
         <Head>
          <title>Fuse⚡</title>
          <meta name="description" content="Connect with like minded"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="pt-[var(--navigation-height)]">
          <Component {...pageProps} />
         </main>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
