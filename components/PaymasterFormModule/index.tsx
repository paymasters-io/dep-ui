import { CheckIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import PaymasterNameStep from "./PaymasterNameStep";
import PaymasterLogoUploadStep from "./PaymasterLogoUploadStep";

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
  const [paymasterLogoUploadStepData, setPaymasterLogoUploadStepData] =
    useState({
      file: null as File | null,
      preview: "",
    });

  const isStepComplete = (index: number) => {
    return steps[index].completed;
  };

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
      case 0:
        setPaymasterStepData(data as { name: string });
        setSteps((prevState) => {
          prevState[0].completed = true;
          return prevState;
        });

        break;
      case 1:
        setPaymasterLogoUploadStepData(
          data as { file: File | null; preview: string }
        );
        if (
          paymasterLogoUploadStepData.file &&
          paymasterLogoUploadStepData.preview !== ""
        ) {
          setSteps((prevState) => {
            prevState[1].completed = true;
            return prevState;
          });
        } else {
          setSteps((prevState) => {
            prevState[1].completed = false;
            return prevState;
          });
        }

      default:
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
                      className={`step ${activeStep == index ? "active" : ""} ${
                        step.completed ? "completed" : ""
                      }`}
                      key={index}
                    >
                      <button
                        onClick={() =>
                          isStepComplete(index) && setActiveStep(index)
                        }
                        disabled={!isStepComplete(index)}
                        className="step-point flex items-center justify-center p-1"
                        data-step-name={step.name}
                      >
                        {step.completed && (
                          <CheckIcon className="absolute icon" />
                        )}

                        <div className="text">
                          <span>{step.name}</span>
                        </div>
                      </button>
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
          <PaymasterLogoUploadStep
            active={activeStep == 1}
            updateContinue={({ data, goBack }) =>
              handleUpdateContinue(1, data, goBack)
            }
          />
        </div>
      </form>
    </div>
  );
};

export default PaymasterForm;
