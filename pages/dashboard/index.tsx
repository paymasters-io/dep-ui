import DashboardLayout from "layouts/Dashboard";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import zetachainImg from "../../assets/icons/zetachain.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import StatCard from "@/components/DashboardModule/StatCard";
import TransactionsTable from "@/components/DashboardModule/TransactionsTable";
import { transactions } from "./transactions";

export const getStaticProps = () => {
  return {
    props: {
      isDark: true,
    },
  };
};

const Dashboard = () => {
  const transactionStat = {
    id: "transactions",
    title: "All Transactions",
    transactionCount: 721_000,
    rate: 11.01,
  };

  const gasStat = {
    id: "gas",
    title: "Gas",
    gasCount: 367_000,
    rate: 9.15,
  };

  const usersStat = {
    id: "users",
    title: "Users",
    usersCount: 1_156,
    rate: -0.56,
  };

  const pluginsStat = {
    id: "plugins",
    title: "Plugins enabled",
    pluginsCount: 239_000,
    rate: -1.48,
  };

  return (
    <>
      <Head>
        <title>Paymaster</title>
      </Head>
      <main className="main">
        <section className="dashboard-section paymaster-info-section">
          <div className="wrapper">
            <header className="dashboard-section-header paymaster-info-header">
              <div className="wrapper">
                <figure className="shrink-0">
                  <Image src={zetachainImg} width={56} height={56} alt="icon" />
                </figure>
                <div className="info-content">
                  <h2 className="name flex items-center gap-3">
                    <span className="text font-semibold text-2xl">
                      Zetachain
                    </span>
                    <ChevronDownIcon className="icon" />
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. In vulputate ac
                    elit.
                  </p>
                </div>
              </div>
            </header>
            <article className="wallet-balance">
              <h2 className="title">Wallet Balance</h2>
              <p className="balance text-5xl font-semibold">0.00</p>
            </article>
          </div>
        </section>
        <section className="dashboard-section stats-section">
          <div className="wrapper">
            <header className="dashboard-section-header">
              <h2 className="text-lg font-semibold">Overview</h2>
            </header>

            <ul className="stats-group">
              <li>
                <StatCard
                  title={transactionStat.title}
                  contentText={transactionStat.transactionCount.toString()}
                  rateInfo={transactionStat.rate}
                />
              </li>
              <li>
                <StatCard
                  title={gasStat.title}
                  contentText={gasStat.gasCount.toString()}
                  rateInfo={gasStat.rate}
                />
              </li>
              <li>
                <StatCard
                  title={usersStat.title}
                  contentText={usersStat.usersCount.toString()}
                  rateInfo={usersStat.rate}
                />
              </li>
              <li>
                <StatCard
                  title={pluginsStat.title}
                  contentText={pluginsStat.pluginsCount.toString()}
                  rateInfo={pluginsStat.rate}
                />
              </li>
            </ul>
          </div>
        </section>
        <section className="dashboard-section transactions-section">
          <div className="wrapper">
            <header className="dashboard-section-header">
              <h2 className="text-lg font-semibold">Recent transactions</h2>
            </header>

            <TransactionsTable transactions={transactions} />
          </div>
        </section>
      </main>
    </>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
