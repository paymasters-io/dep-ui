import { CheckIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import PaymasterNameStep from "./PaymasterNameStep";

const PaymasterForm = () => {
  const [steps, setSteps] = useState([
    {
      name: "Paymaster name",
      completed: false,
    },
    {
      name: "Meta data",
      completed: false,
    },
    {
      name: "Access control rules",
      completed: false,
    },
    {
      name: "Submit",
      completed: false,
    },
  ]);

  const [activeStep, setActiveStep] = useState(0);

  const [paymasterNameStepData, setPaymasterStepData] = useState({
    name: "",
  });

  const handleUpdateContinue = (
    step: number,
    data: object,
    goBack?: number | boolean
  ) => {
    console.log({
      step,
      data,
      goBack,
    });

    switch (step) {
      case 1:
        setPaymasterStepData(data as { name: string });
        break;
    }

    if (goBack) {
      if (typeof goBack === "number") {
        setActiveStep(goBack);
      } else {
        const prevStep = activeStep - 1;
        setActiveStep(prevStep < 0 ? 0 : prevStep);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

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
                        className="step-point flex items-center justify-center p-1"
                        data-step-name={step.name}
                      >
                        {step.completed && <CheckIcon className="icon" />}

                        <div className="text">
                          <span>{step.name}</span>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="step-line"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </header>
          <PaymasterNameStep
            active={activeStep == 0}
            updateContinue={({ data, goBack }) =>
              handleUpdateContinue(0, data, goBack)
            }
          />
        </div>
      </form>
    </div>
  );
};

export default PaymasterForm;
