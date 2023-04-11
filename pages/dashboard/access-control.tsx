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

const AccessControl = () => {
  return (
    <>
      <Head>
        <title>Access Control</title>
      </Head>
      <main className="main">
        <section className="dashboard-section access-control-section !pb-4">
          <div className="wrapper ">
            <header className=" access-control-section-header ">
              <h1 className="text-lg font-semibold">Access control</h1>
              <button className="cta">Save</button>
            </header>
          </div>
        </section>
        <section className="dashboard-section access-control-section">
          <div className="wrapper">
            <header className="dashboard-section-header">
              <h2 className="text-[#b7b8bf] font-semibold text-xl mb-2">
                Max Nonce
              </h2>
              <p className="text-white/60">
                Limit request with the user account nonce
              </p>
            </header>
            <div className="form-control">
              <input
                type="number"
                name="max-nonce"
                id="max-nonce"
                value={0}
                className="form-input max-w-xs"
              />
            </div>
          </div>
        </section>
        <section className="dashboard-section access-control-section">
          <div className="wrapper">
            <header className="dashboard-section-header">
              <h2 className="text-[#b7b8bf] font-semibold text-xl mb-2">
                NFT Gate Contract{" "}
              </h2>
              <p className="text-white/60">Limit request using an NFT</p>
            </header>
            <div className="form-control">
              <input
                type="text"
                name="max-nonce"
                id="max-nonce"
                className="form-input max-w-xs"
                placeholder="Contract Address"
              />
            </div>
          </div>
        </section>
        <section className="dashboard-section access-control-section">
          <div className="wrapper">
            <header className="dashboard-section-header">
              <h2 className="text-[#b7b8bf] font-semibold text-xl mb-2">
                Strict destination
              </h2>
              <p className="text-white/60">
                List of allowed transaction destinations
              </p>
            </header>
            <div className="form-control">
              <input
                type="text"
                name="max-nonce"
                id="max-nonce"
                className="form-input max-w-xs"
                placeholder="Addresses separated by commas"
              />
            </div>
          </div>
        </section>
        <section className="dashboard-section access-control-section">
          <div className="wrapper">
            <header className="dashboard-section-header">
              <h2 className="text-[#b7b8bf] font-semibold text-xl mb-2">
                ERC20 gate
              </h2>
              <p className="text-white/60">
                Limit request using an ERC20 token
              </p>
            </header>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  name="max-nonce"
                  id="max-nonce"
                  className="form-input max-w-xs"
                  placeholder="Value"
                />
                <input
                  type="text"
                  name="max-nonce"
                  id="max-nonce"
                  className="form-input max-w-xs"
                  placeholder="Contract adress"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="dashboard-section access-control-section !pt-4">
          <div className="wrapper">
            <header className="dashboard-section-header access-control-section-header !justify-end">
              <button className="cta">Save</button>
            </header>
          </div>
        </section>
      </main>
    </>
  );
};

AccessControl.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AccessControl;
