import { FormEvent, useState } from "react";

const PaymasterForm = () => {
  const [steps, setSteps] = useState([
    {
      name: "Paymaster name",
    },
    {
      name: "Meta data",
    },
    {
      name: "Access control rules",
    },
    {
      name: "Submit",
    },
  ]);

  const [activeStep, setActiveStep] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submit attempted");
  };

  return (
    <div className="form-cont">
      <form onSubmit={handleSubmit} className="app-form paymaster-form">
        <div className="wrapper">
          <header className="form-header">
            <div className="wrapper">
              <h1 className="font-bold text-paymasters-purple text-lg text-center">
                Create New Paymasters
              </h1>

              <div className="steps-progress">
                {steps.map((step, index) => {
                  return (
                    <div
                      className={`step ${activeStep == index ? "active" : ""}`}
                      key={index}
                    >
                      <div
                        className="step-point"
                        data-step-name={step.name}
                      ></div>
                      {index < steps.length - 1 && (
                        <div className="step-line"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </header>
          <section className="form-step active paymaster-name-step">
            <div className="wrapper">
              <header className="form-step-header">
                <h3>
                  Please provide a name for the Paymaster you are creating.
                </h3>
              </header>

              <div className="form-body">
                <div className="form-control">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
            <div className="action-cont !justify-end">
              <button type="button" className="cta">
                Next
              </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default PaymasterForm;
