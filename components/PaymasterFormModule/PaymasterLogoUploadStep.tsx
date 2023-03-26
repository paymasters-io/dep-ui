import { useEffect, useState } from "react";
import CustomDragDrop from "../AppModule/CustomDragDrop";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

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

  const [removeFile, setRemoveFile] = useState(false);

  const checkStateValid = () => {
    return file !== null && previewURL.trim() !== "";
  };

  const generatePreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewURL(reader.result as string);
    };
  };

  const handleUpdateFile = (file: File) => {
    const isValid = file.type === "image/png" || file.type === "image/jpeg";
    if (!isValid) {
      alert("Please upload a valid image file");
      return;
    }
    generatePreview(file);
    setFile(file);
    setRemoveFile(false);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewURL("");
    setRemoveFile(true);
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
    console.log({
      file,
      previewURL,
    });
  }, [file, previewURL]);

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
          <CustomDragDrop
            updateFileUpload={handleUpdateFile}
            removeFile={removeFile}
          />

          <div className="uploaded-images-cont">
            {file && (
              <div className="uploaded-image img-cont">
                <div className="wrapper">
                  {previewURL && (
                    <Image
                      src={previewURL}
                      width={40}
                      height={40}
                      alt={"preview image"}
                    />
                  )}
                  {previewURL && (
                    <div className="uploaded-image-overlay">
                      <button
                        onClick={handleRemoveFile}
                        type="button"
                        className="cta w-icon"
                      >
                        <XMarkIcon className="icon" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
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
