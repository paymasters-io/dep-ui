import { useEffect, useState } from "react";
import CustomDragDrop from "../AppModule/CustomDragDrop";

export type Continue = {
  data: {
    file: File | null;
    preview: string;
  };
  goBack: boolean;
};

const PaymasterLogoUploadStep = ({
  active,
  updateContinue,
}: {
  active: boolean;
  updateContinue: (data: Continue) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState("");
  const [stateIsValid, setStateIsValid] = useState<boolean>(false);

  const checkStateValid = () => {
    return file !== null && previewURL.trim() !== "";
  };

  const handleUpdateFile = (file: File) => {
    setFile(file);
  };

  const handleContinue = () => {
    if (stateIsValid) {
      updateContinue({
        data: {
          file: file as File,
          preview: previewURL,
        },
        goBack: false,
      });
    }
  };

  useEffect(() => {
    setStateIsValid(checkStateValid());
  }, [name]);

  return (
    <section
      className={`form-step ${
        active ? "active" : ""
      } paymaster-logo-upload-step`}
    >
      <div className="wrapper">
        <header className="form-step-header">
          <h3>Please upload your logo here</h3>
        </header>

        <div className="form-body">
          <CustomDragDrop updateFileUpload={handleUpdateFile} />
        </div>
      </div>
      <div className="action-cont">
        <button
          className="cta no-bg"
          onClick={() =>
            updateContinue({
              data: { file, preview: previewURL },
              goBack: true,
            })
          }
        >
          Go Back
        </button>
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

export default PaymasterLogoUploadStep;
