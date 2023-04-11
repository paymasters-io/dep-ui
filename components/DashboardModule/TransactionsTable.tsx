export type transactions = {
  tnxHash: string;
  paymentComplete: boolean;
  from: string;
  to: string;
  taxFee: string;
}[];
const TransactionsTable = ({
  transactions,
}: {
  transactions: transactions;
}) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="dashboard-table">
        <thead className="table-header">
          <tr>
            <th scope="col" className="table-cell">
              TX Hash
            </th>
            <th scope="col" className="table-cell">
              From
            </th>
            <th scope="col" className="table-cell">
              To
            </th>
            <th scope="col" className="table-cell">
              Value
            </th>
            <th scope="col" className="table-cell">
              TX Fee
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
    </div>
  );
};

export default TransactionsTable;
