import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "layouts/Dashboard";
import Head from "next/head";
import { ReactElement } from "react";
import filterIcon from "../../assets/icons/filter_list.svg";
import Image from "next/image";
import StatCard from "@/components/DashboardModule/StatCard";
import TransactionsTable from "@/components/DashboardModule/TransactionsTable";

export const getStaticProps = () => {
  return {
    props: {
      isDark: true,
    },
  };
};

export const transactions = [
  // {
  //   tnxHash: "0xaaf0f6c259c....",
  //   paymentComplete: true,
  //   from: "0x0aaf0f76c259c....",
  //   to: "0x0aaf0f76c259c....",
  //   taxFee: "0.00220197",
  // },
  // {
  //   tnxHash: "0x0f76c259c....",
  //   paymentComplete: false,
  //   from: "0x0aaf0f76c343e259c....",
  //   to: "0x0aaf0f76c259c....",
  //   taxFee: "0.00220197",
  // },
  // {
  //   tnxHash: "0xaaf76f3fefc259c....",
  //   paymentComplete: true,
  //   from: "0x0aaf0f76c259c....",
  //   to: "0x0aaf0f76c259c....",
  //   taxFee: "0.00220197",
  // },
  // {
  //   tnxHash: "0xaaf0f7343eff69c....",
  //   paymentComplete: false,
  //   from: "0x0aaf0f76c259c....",
  //   to: "0x0aaf0f76c259c....",
  //   taxFee: "0.00220197",
  // },
  // {
  //   tnxHash: "0zaf0f733fe259c....",
  //   paymentComplete: false,
  //   from: "0x0aaf0f76c259c....",
  //   to: "0x0aaf0f76c259c....",
  //   taxFee: "0.00220197",
  // },
];

const Transactions = () => {
  const transactionStat = {
    id: "transactions",
    title: "All Transactions",
    transactionCount: 0,
    rate: 0.00,
  };

  const feesStat = {
    id: "fees",
    title: "Total Fees",
    fees: 0,
    rate: 0.00,
  };

  return (
    <>
      <Head>
        <title>Transactions</title>
      </Head>
      <main className="main">
        <section className="dashboard-section stats-section">
          <div className="wrapper">
            <div className="stats-group">
              <StatCard
                title={transactionStat.title}
                contentText={transactionStat.transactionCount.toString()}
                rateInfo={transactionStat.rate}
              />
              <StatCard
                title={feesStat.title}
                contentText={feesStat.fees.toString()}
                rateInfo={feesStat.rate}
              />
            </div>
          </div>
        </section>
        <section className="dashboard-section transactions-section">
          <div className="wrapper">
            <header className="section-header py-4">
              <div className="wrapper flex gap-4 items-center justify-between">
                <h2 className="text-lg font-semibold">Recent Transactions</h2>
                <button className="cta no-bg">
                  <Image
                    src={filterIcon}
                    width={24}
                    height={24}
                    alt="icon"
                    className="icon"
                  />
                  <span className="text dark:text-white">Filter</span>
                </button>
              </div>
            </header>
            <TransactionsTable transactions={transactions} />
            {/* <div className="relative overflow-x-auto">
              <table className="dashboard-table">
                <thead className="table-header">
                  <tr>
                    <th scope="col" className="table-cell">
                      Tnx Hash
                    </th>
                    <th scope="col" className="table-cell">
                      From
                    </th>
                    <th scope="col" className="table-cell">
                      To
                    </th>
                    <th scope="col" className="table-cell">
                      Tax Fee
                    </th>
                    <th scope="col" className="table-cell">
                      Tax Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(
                    ({ tnxHash, from, to, taxFee, paymentComplete }) => (
                      <tr key={tnxHash} className="table-row">
                        <th scope="row" className="table-header-cell">
                          <p>{tnxHash}</p>
                          {paymentComplete && (
                            <div className="status flex items-center gap-2 py-2">
                              <span className="status-dot w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              <span className="status-text text-xs font-light">
                                Payment Complete
                              </span>
                            </div>
                          )}
                        </th>
                        <td className="table-cell">{from}</td>
                        <td className="table-cell">{to}</td>
                        <td className="table-cell">{taxFee}</td>
                        <td className="table-cell">{taxFee}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};
Transactions.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Transactions;
