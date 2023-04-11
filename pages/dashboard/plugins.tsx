import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "layouts/Dashboard";
import Head from "next/head";
import { ReactElement } from "react";
import filterIcon from "../../assets/icons/filter_list.svg";
import Image from "next/image";
import StatCard from "@/components/DashboardModule/StatCard";
import { useState } from "react";

export const getStaticProps = () => {
  return {
    props: {
      isDark: true,
    },
  };
};

export const PluginSetting = ({
  id,
  name,
  description,
  children,
}: {
  id: string;
  name: string;
  description: string;
  children: ReactElement;
}) => {
  const [active, setActive] = useState(false);
  return (
    <form action="" className="plugin-setting p-8 bg-[#010A1D] rounded-xl">
      <div className="wrapper">
        <header className="plugin-setting-header ">
          <div className="title-wrapper flex gap-4 items-center mb-2">
            <h3 className="title font-semibold text-xl">{name}</h3>
            <div className="form-control checkbox-input inline-block">
              <label className={`checkbox-input`} htmlFor={`active-${id}`}>
                <div className={`switch ${active ? "active" : ""}`}></div>
                <input
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                  type="checkbox"
                  name={`active-${id}`}
                  id={`active-${id}`}
                />
              </label>
            </div>
          </div>
          <p className="description text-[#FFFFFF99]">{description}</p>
        </header>
        {active && (
          <>
            <div className="plugin-setting-content mt-12">{children}</div>

            <footer className="plugin-setting-footer mt-12">
              <div className="action-cont flex justify-end">
                <button className="cta">Save</button>
              </div>
            </footer>
          </>
        )}
      </div>
    </form>
  );
};

const Plugins = () => {
  const pluginsStat = {
    id: "plugins",
    title: "Plugins",
    transactionCount: "0 of 5",
    // rate: 0.00,
  };

  const feesStat = {
    id: "fees",
    title: "Total Fees",
    fees: 0,
    rate: 0.0,
  };

  const plugins = [
    {
      id: "triggered-gasless",
      name: "Triggered Gasless",
      description:
        "plugin that enables gas offset when the transaction meets a certain criteria",
      formInputs: (
        <div className="form-body !grid !grid-cols-2">
          <div className="form-control">
            <label htmlFor="name">Min message value</label>
            <input
              type="number"
              name="min-message-value"
              id="min-message-value"
              className="form-input max-w-xs"
              placeholder="0"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Call data selector</label>
            <input
              type="text"
              name="call-data-selector"
              id="call-data-selector"
              className="form-input max-w-xs"
              placeholder="Function Sig"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Call data params</label>
            <div className="input-group">
              <input
                type="number"
                name="call-data-params"
                id="call-data-params"
                className="form-input max-w-xs"
                placeholder="Index"
              />
              <input
                type="text"
                name="call-data-params"
                id="call-data-params"
                className="form-input max-w-xs"
                placeholder="Value"
              />
            </div>
          </div>
          <div />
        </div>
      ),
    },
    {
      id: "dynamic-free-quotes",
      name: "Dynamic Fee Quotes",
      description:
        "This enables gas offsets with accurate conversion of gas price to erc20 token equivalent using oracles",
      formInputs: (
        <div className="form-body !grid !grid-cols-2">
          <div className="form-control">
            <label htmlFor="name">Oracle Contract</label>
            <input
              type="text"
              name="price-feed"
              id="price-feed"
              className="form-input max-w-xs"
              placeholder="Address"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Fee Amount</label>
            <input
              type="number"
              name="call-data-selector"
              id="call-data-selector"
              className="form-input max-w-xs"
              placeholder="0"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Fee Token</label>
            <input
              type="text"
              name="strict-destination"
              id="strict-destination"
              className="form-input max-w-xs"
              placeholder="Address"
            />
          </div>
        </div>
      ),
    },
    {
      id: "on-chain-rebates",
      name: "On-chain Rebates",
      description:
        "plugin that adds rebate mechanism to a paymaster based on certain criteria.",
      formInputs: (
        <div className="form-body !grid !grid-cols-2 md:grid-cols-3">
          <div className="form-control">
            <label htmlFor="name">Rebate percentage</label>
            <input
              type="number"
              name="min-message-value"
              id="min-message-value"
              className="form-input max-w-xs"
              placeholder="0"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Max no of rebates</label>
            <input
              type="number"
              name="call-data-selector"
              id="call-data-selector"
              className="form-input max-w-xs"
              placeholder="0"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Rebate token</label>
            <input
              type="text"
              name="strict-destination"
              id="strict-destination"
              className="form-input max-w-xs"
              placeholder="Address"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Rebate trigger</label>
            <input
              type="number"
              name="strict-destination"
              id="strict-destination"
              className="form-input max-w-xs"
              placeholder="0"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Max rebate amount</label>
            <input
              type="number"
              name="strict-destination"
              id="strict-destination"
              className="form-input max-w-xs"
              placeholder="0"
            />
          </div>
        </div>
      ),
    },
    {
      id: "gas-delegation",
      name: "Gas Delegation",
      description:
        "Enables the delegation of bootloader calls to a sister paymaster when the current paymaster runs out of gas",
      formInputs: (
        <div className="form-body !grid !grid-cols-2 md:grid-cols-3">
          <div className="form-control">
            <label htmlFor="name">Sister Paymaster</label>
            <input
              type="text"
              name="min-message-value"
              id="min-message-value"
              className="form-input max-w-xs"
              placeholder="input here"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Plugins</title>
      </Head>
      <main className="main">
        <section className="dashboard-section stats-section">
          <div className="wrapper">
            <div className="stats-group">
              <StatCard
                title={pluginsStat.title}
                contentText={pluginsStat.transactionCount.toString()}
                // rateInfo={pluginsStat.rate}
              />
              <StatCard
                title={feesStat.title}
                contentText={feesStat.fees.toString()}
                rateInfo={feesStat.rate}
              />
            </div>
          </div>
        </section>
        <section className="dashboard-section plugins-section !py-16">
          <div className="wrapper flex flex-col gap-8">
            {plugins.map((plugin) => (
              <PluginSetting
                key={plugin.id}
                id={plugin.id}
                name={plugin.name}
                description={plugin.description}
              >
                {plugin.formInputs ? plugin.formInputs : <></>}
              </PluginSetting>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
Plugins.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Plugins;
