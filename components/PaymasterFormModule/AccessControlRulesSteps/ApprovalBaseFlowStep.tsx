import CustomSelect, { Option } from "@/components/CustomSelect";
import Link from "next/link";
import { useEffect, useState } from "react";

export type ApprovalBaseFlowContinue = {
  data: {
    tokenGate: boolean;
    amount?: number | null;
  };
  goBack: boolean;
};

const ApprovalBaseFlow = ({
  active,
  updateContinue,
}: {
  active: boolean;
  updateContinue: (data: ApprovalBaseFlowContinue) => void;
}) => {
  const [tokenGate, settokenGate] = useState<boolean>(false);
  const [tokenType, setTokenType] = useState<Option>();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [stateIsValid, setStateIsValid] = useState<boolean>(false);

  const checkStateValid = () => {
    return tokenGate ? !!amount && amount > 0 : true;
  };

  const handleTokenTypeSelect = (option: Option) => {
    console.log({
      option,
    });

    setTokenType(option);
  };

  const handleContinue = () => {
    if (stateIsValid) {
      updateContinue({ data: { tokenGate, amount }, goBack: false });
    }
  };

  useEffect(() => {
    setStateIsValid(checkStateValid());
  }, [tokenGate, amount]);

  return (
    <section
      className={`form-step ${
        active ? "active" : ""
      } paymaster-approval-base-flow-step`}
    >
      <div className="wrapper">
        <header className="form-step-header">
          <h3>Enable approval base flow?</h3>
        </header>

        <div className="form-body">
          <div className="form-control checkbox-input">
            <label className={`checkbox-input`} htmlFor="tokengate">
              <span>tokenGate?</span>
              <div className={`switch ${tokenGate ? "active" : ""}`}></div>
              <input
                checked={tokenGate}
                onChange={(e) => settokenGate(e.target.checked)}
                type="checkbox"
                name="tokengate"
                id="tokengate"
              />
            </label>
          </div>
          <div className={`form-control ${tokenGate ? "" : "disabled"}`}>
            <CustomSelect
              options={[
                {
                  label: "Select Token type",
                  value: null,
                },
              ]}
              onSelect={handleTokenTypeSelect}
            />
          </div>
          <div className={`form-control ${tokenGate ? "" : "disabled"}`}>
            <input
              value={amount || 0}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              type="number"
              className="form-input"
              placeholder="Amount"
            />
          </div>
        </div>
      </div>
      <div className="action-cont ">
        <button
          className="cta no-bg"
          onClick={() =>
            updateContinue({
              data: { tokenGate },
              goBack: true,
            })
          }
        >
          Go Back
        </button>
        <span>
          Already have a Paymaster?
          <Link href="/submit-paymaster"> Submit here.</Link>
        </span>

        <button
          onClick={handleContinue}
          disabled={!stateIsValid}
          type="button"
          className="cta"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ApprovalBaseFlow;
