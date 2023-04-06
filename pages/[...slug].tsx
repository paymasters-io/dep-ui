import DashboardLayout from "layouts/Dashboard";
import DefaultLayout from "layouts/Default";
import Head from "next/head";
import { ReactElement } from "react";

export const getStaticProps = () => {
  return {
    props: {
      isDark: true,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const _404 = () => {
  return (
    <>
      <Head>
        <title>You seem lost</title>
      </Head>

      <main className="main">
        <div className="app-section">
          <div className="wrapper !h-[calc(100vh-12rem)] flex flex-col justify-center">
            <h1 className="font-semibold text-6xl">404</h1>
            <p className="error__text">
              You seem lost. The page you are looking for does not exist.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

_404.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default _404;
