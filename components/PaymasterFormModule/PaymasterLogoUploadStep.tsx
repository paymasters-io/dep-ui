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
          {file && (
            <div className="form-images form-control">
              <div className="form-image">
                <div className="img-cont">
                  <Image
                    src={previewURL}
                    alt="Preview"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          )}

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
                        onClick={() => {
                          setRemoveFile(true);
                        }}
                        type="button"
                        className="cta w-icon !bg-white"
                      >
                        <XMarkIcon className="icon !text-primary-500" />
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
