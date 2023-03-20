import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";

import DepLayout from "layouts/Dep";
import { ReactElement } from "react";
import PaymasterForm from "@/components/PaymasterFormModule";

export const getStaticProps = () => {
  return {
    props: {
      isDark: false,
    },
  };
};

export default function CreatePaymaster() {
  return (
    <div className="app=page">
      <Head>
        <title>Create Paymaster</title>
      </Head>
      <main className="app-main">
        <PaymasterForm />
      </main>
    </div>
  );
}

CreatePaymaster.getLayout = (page: ReactElement) => {
  return <DepLayout>{page}</DepLayout>;
};
