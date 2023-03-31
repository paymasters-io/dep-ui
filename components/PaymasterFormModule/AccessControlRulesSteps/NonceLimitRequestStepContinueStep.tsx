import Link from "next/link";
import { useEffect, useState } from "react";

export type NonceLimitRequestStepContinue = {
  data: {
    maxNonce: boolean;
    amount?: number | null;
  };
  goBack: boolean;
};

const NonceLimitRequestStep = ({
  active,
  updateContinue,
}: {
  active: boolean;
  updateContinue: (data: NonceLimitRequestStepContinue) => void;
}) => {
  const [maxNonce, setMaxNonce] = useState<boolean>(false);
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [stateIsValid, setStateIsValid] = useState<boolean>(false);

  const checkStateValid = () => {
    return maxNonce ? !!amount && amount > 0 : true;
  };

  const handleContinue = () => {
    if (stateIsValid) {
      updateContinue({ data: { maxNonce, amount }, goBack: false });
    }
  };

  useEffect(() => {
    setStateIsValid(checkStateValid());
  }, [maxNonce, amount]);

  return (
    <section
      className={`form-step ${
        active ? "active" : ""
      } paymaster-nonce-limit-request-step`}
    >
      <div className="wrapper">
        <header className="form-step-header">
          <h3>Do you wish to use user nonce to limit request?</h3>
        </header>

        <div className="form-body">
          <div className="form-control checkbox-input">
            <label className={`checkbox-input`} htmlFor="maxnonce">
              <span>maxNonce?</span>
              <div className={`switch ${maxNonce ? "active" : ""}`}></div>
              <input
                checked={maxNonce}
                onChange={(e) => setMaxNonce(e.target.checked)}
                type="checkbox"
                name="maxnonce"
                id="maxnonce"
              />
            </label>
          </div>
          {maxNonce && (
            <div className="form-control">
              <input
                value={amount || 0}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                type="number"
                className="form-input"
                placeholder="Amount"
              />
            </div>
          )}
        </div>
      </div>
      <div className="action-cont">
        <button
          className="cta no-bg"
          onClick={() =>
            updateContinue({
              data: { maxNonce },
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

export default NonceLimitRequestStep;
