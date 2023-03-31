import Link from "next/link";
import { useEffect, useState } from "react";

export type PaymasterNameStepContinue = {
  data: {
    name: string;
  };
  goBack: boolean;
};

const PaymasterNameStep = ({
  active,
  updateContinue,
}: {
  active: boolean;
  updateContinue: (data: PaymasterNameStepContinue) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [stateIsValid, setStateIsValid] = useState<boolean>(false);

  const checkStateValid = () => {
    return name.trim().length > 0;
  };

  const handleContinue = () => {
    if (stateIsValid) {
      updateContinue({ data: { name }, goBack: false });
    }
  };

  useEffect(() => {
    setStateIsValid(checkStateValid());
  }, [name]);

  return (
    <section
      className={`form-step ${active ? "active" : ""} paymaster-name-step`}
    >
      <div className="wrapper">
        <header className="form-step-header">
          <h3>Please provide a name for the Paymaster you are creating.</h3>
        </header>

        <div className="form-body">
          <div className="form-control">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-input"
              placeholder="Name"
            />
          </div>
        </div>
      </div>
      <div className="action-cont !justify-end">
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

export default PaymasterNameStep;
