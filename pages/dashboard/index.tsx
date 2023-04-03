import DashboardLayout from "layouts/Dashboard";
import Head from "next/head";
import { ReactElement } from "react";

export const getStaticProps = () => {
  return {
    props: {
      isDark: true,
    },
  };
};

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Paymaster</title>
      </Head>
      <main className="main">
        hi
      </main>
    </>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
