import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FormEvent, useEffect, useState } from "react";
import PaymasterNameStep from "./PaymasterNameStep";
import PaymasterLogoUploadStep from "./PaymasterLogoUploadStep";
import NonceLimitRequestStep, {
  NonceLimitRequestStepContinue,
} from "./AccessControlRulesSteps/NonceLimitRequestStepContinueStep";
import ApprovalBaseFlow, {
  ApprovalBaseFlowContinue,
} from "./AccessControlRulesSteps/ApprovalBaseFlowStep";
import GasSettlementStep, {
  GasSettlementStepContinue,
} from "./AccessControlRulesSteps/GasSettlementStep";
import PaymasterAdminAddressStep, {
  PaymasterAdminAddressStepContinue,
} from "./PaymasterAdminAddressStep";

export type Status = "loading" | "success" | "error";

export type Message = string;

export const StatusScreen = ({
  active,
  status,
  message,
  updateContinue,
}: {
  active: boolean;
  status: Status;
  message: Message;
  updateContinue: ({
    goBack,
    reset,
  }: {
    goBack?: boolean;
    reset?: boolean;
  }) => void;
}) => {
  return (
    <section
      className={`form-step ${active ? "active" : ""} paymaster-status-step`}
    >
      <div className="wrapper">
        {status === "loading" && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="loader"></div>
            <p className="mt-4">{message}</p>
          </div>
        )}
        {status === "success" && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <CheckIcon className="w-8 h-8 text-green-500" />
            </div>
            <p className="mt-4">{message}</p>
          </div>
        )}
        {status === "error" && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
              <XMarkIcon className="w-8 h-8 text-red-500" />
            </div>
            <p className="mt-4">{message}</p>
          </div>
        )}
      </div>
      <div className="action-cont ">
        {status == "error" && (
          <button
            className="cta no-bg"
            onClick={() =>
              updateContinue({
                goBack: true,
              })
            }
          >
            Go Back
          </button>
        )}
        {status !== "loading" && (
          <button
            type="button"
            onClick={() => {
              updateContinue({
                reset: true,
              });
            }}
            className="cta"
          >
            Continue
          </button>
        )}
      </div>
    </section>
  );
};

const PaymasterForm = ({
  updateResetKey,
}: {
  updateResetKey: (key: number) => void;
}) => {
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
      steps: [
        {
          name: "1",
          completed: false,
        },
        {
          name: "2",
          completed: false,
        },
        {
          name: "3",
          completed: false,
        },
      ],
    },
    {
      name: "Submit",
      completed: false,
    },
  ]);
  const [formKey, setFormKey] = useState(0);

  const [activeStep, setActiveStep] = useState(0);
  const [activeSecondLevelStep, setActiveSecondLevelStep] = useState(0);

  const [paymasterNameStepState, setPaymasterNameStepState] = useState({
    name: "",
  });
  const [paymasterLogoUploadStepState, setPaymasterLogoUploadStepState] =
    useState({
      file: null as File | null,
      preview: "",
    });

  const [nonceLimitRequestStepState, setNonceLimitRequestStepState] =
    useState<NonceLimitRequestStepContinue>();

  const [approvalBaseFlowStepState, setApprovalBaseFlowStepState] =
    useState<ApprovalBaseFlowContinue>();

  const [gasSettlementStepState, setGasSettlementStepState] =
    useState<GasSettlementStepContinue>();

  const [paymasterAdminAddressStepState, setPaymasterAdminAddressStepState] =
    useState<PaymasterAdminAddressStepContinue>();

  const isStepComplete = (index: number) => {
    return steps[index].completed;
  };

  const [submissionStatus, setSubmissionStatus] = useState<{
    status: Status;
    message: Message;
  }>({
    status: "loading",
    message: "Submitting paymaster...",
  });

  const handleUpdateContinue = ({
    step,
    data,
    goBack,
    reset,
    secondLevelStep,
  }: {
    step: number;
    data?: object;
    goBack?: number | boolean;
    reset?: boolean;
    secondLevelStep?: number;
  }) => {
    // console.log({
    //   step,
    //   secondLevelStep,
    //   data,
    //   goBack,
    // });

    switch (step) {
      case 0:
        setPaymasterNameStepState(data as { name: string });
        setSteps((prevState) => {
          prevState[0].completed = true;
          return prevState;
        });

        break;
      case 1:
        const paymasterLogoUploadStepData = data as {
          file: File | null;
          preview: string;
        };

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

        setPaymasterLogoUploadStepState(paymasterLogoUploadStepData);

      case 2:
        switch (secondLevelStep) {
          case 0:
            // const nonceLimitRequestStepData = data as NonceLimitRequestStepContinue;
            setNonceLimitRequestStepState(
              data as NonceLimitRequestStepContinue
            );
            setSteps((prevState) => {
              prevState[2].steps && (prevState[2].steps[0].completed = true);

              return prevState;
            });
            break;

          case 1:
            setApprovalBaseFlowStepState(data as ApprovalBaseFlowContinue);

            setSteps((prevState) => {
              prevState[2].steps && (prevState[2].steps[1].completed = true);

              return prevState;
            });

            break;

          case 2:
            setGasSettlementStepState(data as GasSettlementStepContinue);

            setSteps((prevState) => {
              prevState[2].steps && (prevState[2].steps[2].completed = true);
              prevState[2].completed = true;
              return prevState;
            });

            break;

          default:
            break;
        }

        break;

      case 3:
        setPaymasterAdminAddressStepState(
          data as PaymasterAdminAddressStepContinue
        );

        setSteps((prevState) => {
          prevState[3].completed = true;
          return prevState;
        });

        break;

      default:
        break;
    }

    // console.log({
    //   step,
    //   secondLevelStep,
    // });

    if (reset) {
      updateResetKey(formKey + 1);
    } else if (goBack) {
      // console.log({
      //   goBack,
      //   step,
      //   secondLevelStep,
      // });

      if (typeof goBack === "number") {
        setActiveStep(goBack);
      } else {
        const prevStep = activeStep - 1;
        const prevSecondLevelStep = activeSecondLevelStep - 1;
        // console.log({
        //   prevSecondLevelStep,
        //   type: typeof prevSecondLevelStep,
        //   activeSecondLevelStep,
        //   secondLevelStep,
        // });

        typeof secondLevelStep == "number" && prevSecondLevelStep >= 0
          ? setActiveSecondLevelStep(
              prevSecondLevelStep < 0 ? 0 : prevSecondLevelStep
            )
          : setActiveStep(prevStep < 0 ? 0 : prevStep);
      }
    } else {
      // const nextSecondLevelStep = activeSecondLevelStep + 1
      const stepsLength = steps[step].steps?.length;
      typeof secondLevelStep == "number" &&
      stepsLength &&
      secondLevelStep < stepsLength - 1
        ? setActiveSecondLevelStep(activeSecondLevelStep + 1)
        : setActiveStep(activeStep + 1);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSubmissionStatus({
      status: "loading",
      message: "Submitting paymaster...",
    });

    setTimeout(() => {
      // randomize submission status
      const random = Math.floor(Math.random() * 10);
      if (random % 2 === 0) {
        setSubmissionStatus({
          status: "success",
          message: "Paymaster submitted successfully!",
        });
      } else {
        setSubmissionStatus({
          status: "error",
          message: "Paymaster submission failed!",
        });
      }
    }, 2000);
  };

  useEffect(() => {
    console.log({
      steps,
    });
  }, [steps]);

  useEffect(() => {
    console.log({
      paymasterNameStepState,
      paymasterLogoUploadStepState,
      nonceLimitRequestStepState,
      approvalBaseFlowStepState,
      gasSettlementStepState,
      paymasterAdminAddressStepState,
    });
  }, [
    paymasterNameStepState,
    paymasterLogoUploadStepState,
    nonceLimitRequestStepState,
    approvalBaseFlowStepState,
    gasSettlementStepState,
    paymasterAdminAddressStepState,
  ]);

  useEffect(() => {
    console.log({
      formKey,
    });
  }, [formKey]);

  // useEffect(() => {
  //   console.log({
  //     activeStep,
  //     activeSecondLevelStep,
  //   });
  // }, [activeStep, activeSecondLevelStep]);

  return (
    <div className="form-cont">
      <form
        key={formKey}
        onSubmit={handleSubmit}
        className="app-form paymaster-form"
      >
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
                        onClick={() => {
                          if (isStepComplete(index)) {
                            setActiveStep(index);
                            setActiveSecondLevelStep(0);
                          }
                        }}
                        disabled={!isStepComplete(index)}
                        className="step-point flex items-center justify-center p-1"
                        data-step-name={step.name}
                      >
                        {step.completed && (
                          <CheckIcon className="absolute icon" />
                        )}

                        <div className="text">
                          <span>
                            {index == 2 && step.steps && activeStep == 2
                              ? `${step.name} ${
                                  activeSecondLevelStep + 1 > step.steps?.length
                                    ? activeSecondLevelStep
                                    : activeSecondLevelStep + 1
                                }/${step.steps?.length}`
                              : step.name}
                          </span>
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
              handleUpdateContinue({ step: 0, data, goBack })
            }
          />
          <PaymasterLogoUploadStep
            active={activeStep == 1}
            updateContinue={({ data, goBack }) =>
              handleUpdateContinue({ step: 1, data, goBack })
            }
          />
          <NonceLimitRequestStep
            active={activeStep == 2 && activeSecondLevelStep == 0}
            updateContinue={({ data, goBack }) =>
              handleUpdateContinue({
                step: 2,
                secondLevelStep: 0,
                data,
                goBack,
              })
            }
          />
          <ApprovalBaseFlow
            active={activeStep == 2 && activeSecondLevelStep == 1}
            updateContinue={({ data, goBack }) =>
              handleUpdateContinue({
                step: 2,
                secondLevelStep: 1,
                data,
                goBack,
              })
            }
          />
          <GasSettlementStep
            active={activeStep == 2 && activeSecondLevelStep == 2}
            updateContinue={({ data, goBack }) =>
              handleUpdateContinue({
                step: 2,
                secondLevelStep: 2,
                data,
                goBack,
              })
            }
          />
          <PaymasterAdminAddressStep
            active={activeStep == 3}
            updateContinue={({ data, goBack }) =>
              handleUpdateContinue({
                step: 3,
                data,
                goBack,
              })
            }
          />
          <StatusScreen
            active={activeStep == 4}
            status={submissionStatus.status}
            message={submissionStatus.message}
            updateContinue={({ goBack, reset }) =>
              handleUpdateContinue({ step: 4, goBack, reset })
            }
          />
        </div>
      </form>
    </div>
  );
};

export default PaymasterForm;
