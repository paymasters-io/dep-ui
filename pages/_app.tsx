import "@/styles/global.css";
import type { AppProps } from "next/app";
import DefaultLayout from "layouts/Default";

import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  // Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);


  useEffect(() => {
    document.documentElement.className = pageProps.isDark ? "dark" : "";
  });
  return getLayout(<Component {...pageProps} />);
}

