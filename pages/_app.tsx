import "@/styles/global.css";
import type { AppProps } from "next/app";
import type { AppType } from "next/app";

// import {trpc}
import DefaultLayout from "layouts/Default";

import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";
import { trpc } from "utils/trpc";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  // Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  useEffect(() => {
    document.documentElement.className = pageProps.isDark ? "dark" : "";
  });
  return getLayout(<Component {...pageProps} />);
}

export default trpc.withTRPC(MyApp as AppType);
