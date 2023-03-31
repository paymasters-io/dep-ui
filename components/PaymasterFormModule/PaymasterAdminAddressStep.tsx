import Link from "next/link";
import { useEffect, useState } from "react";

export type PaymasterAdminAddressStepContinue = {
  data: {
    address: string;
  };
  goBack: boolean;
};

const PaymasterAdminAddressStep = ({
  active,
  updateContinue,
}: {
  active: boolean;
  updateContinue: (data: PaymasterAdminAddressStepContinue) => void;
}) => {
  const [address, setAddress] = useState<string>("");
  const [stateIsValid, setStateIsValid] = useState<boolean>(false);

  const checkStateValid = () => {
    return address.trim().length > 0;
  };

  const handleContinue = () => {
    if (stateIsValid) {
      updateContinue({ data: { address }, goBack: false });
    }
  };

  useEffect(() => {
    setStateIsValid(checkStateValid());
  }, [address]);

  return (
    <section
      className={`form-step ${
        active ? "active" : ""
      } paymaster-admin-address-step`}
    >
      <div className="wrapper">
        <header className="form-step-header">
          <h3>Pamaster admin address</h3>
        </header>

        <div className="form-body">
          <div className="form-control">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-input"
              placeholder="Validation Address"
            />
          </div>
        </div>
      </div>
      <div className="action-cont">
        <button
          className="cta no-bg"
          onClick={() =>
            updateContinue({
              data: { address },
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
          type="submit"
          className="cta"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default PaymasterAdminAddressStep;
