import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";

import DefaultLayout from "layouts/Default";
import { ReactElement } from "react";

import zetachainImg from "../assets/icons/zetachain.png";
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const getStaticProps = () => {
  return {
    props: {
      isDark: true,
    },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Paymaster</title>
        <meta
          name="description"
          content="Paymaster is a possile new approach 
        to handling paymasters for wallets implementing Account Abstraction."
        />
        <meta
          name="og:description"
          content="Paymaster enables users to choose any paymaster 
         they are eligible to use without handling complex interactions. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className="app-main">
        <section className="app-section">
          <div className="wrapper">
            <header className="app-section-header">
              <h2>Active Paymaster</h2>
            </header>
            <article className="paymaster-card">
              <div className="wrapper">
                <header className="paymaster-card-header">
                  <figure className="img-cont">
                    <Image
                      src={zetachainImg}
                      width={36}
                      height={36}
                      alt="zeta"
                    />
                  </figure>
                  <div className="paymaster-info">
                    <h3 className="font-bold">Zetachain</h3>
                    <p>
                      The only public an decentralized blockchain that enables
                      message passing and...
                    </p>
                  </div>
                </header>
                <div className="status">
                  <div className="cta no-bg !gap-1">
                    <span className="text text-white">Active</span>
                    <CheckIcon className="icon !w-4 !h-4" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="app-section">
          <div className="wrapper pb-16 border-b border-[#FFFFFF12]">
            <div className="form-control">
              <div className="input-cont form-input grad-border" data-type="text">
                <MagnifyingGlassIcon className="icon" />
                <input type="text" placeholder="Search paymasters"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
