import CustomSelect, { Option } from "@/components/CustomSelect";
import Link from "next/link";
import { useEffect, useState } from "react";

export type settler = string | "users" | "dao-protocol";

export type GasSettlementStepContinue = {
  data: {
    // userIsSettler: boolean;
    // daoIsSettler: boolean;
    settler: settler;
    token?: string | null;
  };
  goBack: boolean;
};

const GasSettlementStep = ({
  active,
  updateContinue,
}: {
  active: boolean;
  updateContinue: (data: GasSettlementStepContinue) => void;
}) => {
  // const [userIsSettler, setUserIsSettler] = useState<boolean>(false);
  // const [daoIsSettler, setDaoIsSettler] = useState<boolean>(true);
  const [settler, setSettler] = useState<settler>("dao-protocol");
  const [token, setToken] = useState<string | undefined>(undefined);
  const [stateIsValid, setStateIsValid] = useState<boolean>(false);

  const checkStateValid = () => {
    // return userIsSettler && !!token && token.trim().length > 0;
    return settler && settler == "users"
      ? !!token && token.trim().length > 0
      : true;
  };

  const handleContinue = () => {
    if (stateIsValid) {
      updateContinue({
        data: { settler, token },
        goBack: false,
      });
    }
  };

  useEffect(() => {
    setStateIsValid(checkStateValid());
    console.log({
      settler,
    });
  }, [settler, token]);

  return (
    <section
      className={`form-step ${
        active ? "active" : ""
      } paymaster-gas-settlement-step`}
    >
      <div className="wrapper">
        <header className="form-step-header">
          <h3>Who settles the gas?</h3>
        </header>

        <div className="form-body">
          <div className="form-control radio-control">
            <label htmlFor="users">
              <input
                checked={settler == "users"}
                onChange={(e) => setSettler(e.target.value)}
                type="radio"
                name="settler"
                id="users"
                value="users"
                className="form-radio"
              />
              <span className="text">The Users</span>
            </label>
          </div>
          <div className="form-control radio-control">
            <label htmlFor="dao-protocol">
              <input
                checked={settler == "dao-protocol"}
                onChange={(e) => setSettler(e.target.value)}
                type="radio"
                name="settler"
                id="dao-protocol"
                value="dao-protocol"
                className="form-radio"
              />
              <span className="text">The Dao / protocol</span>
            </label>
          </div>
          <div
            className={`form-control ${settler == "users" ? "" : "disabled"}`}
          >
            <label htmlFor="gas-fee-token">Token for gas fee payment.</label>
            <input
              value={token || ""}
              onChange={(e) => setToken(e.target.value)}
              type="text"
              name="gas-fee-token"
              id="gas-fee-token"
              className="form-input"
              placeholder="token"
            />
          </div>
        </div>
      </div>
      <div className="action-cont">
        <button
          className="cta no-bg"
          onClick={() =>
            updateContinue({
              data: { settler },
              goBack: true,
            })
          }
        >
          Go Back
        </button>
        <span>
          Already have a Paymaster?
          <Link href="/create-paymaster"> Submit here.</Link>
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

export default GasSettlementStep;
