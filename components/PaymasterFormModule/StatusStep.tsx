import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export type Status = "loading" | "success" | "error";

export type Message = string;

const StatusScreen = ({
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

export default StatusScreen;
