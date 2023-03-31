import CustomDragDrop from "@/components/AppModule/CustomDragDrop";
import { XMarkIcon } from "@heroicons/react/24/outline";
import DepLayout from "layouts/Dep";
import Image from "next/image";
import { ReactElement, useState } from "react";

const SubmitPaymaster = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string>("");
  const [removeFile, setRemoveFile] = useState<boolean>(false);

  const generatePreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewURL(reader.result as string);
    };
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewURL("");
    setRemoveFile(true);
  };

  const handleUpdateFileUpload = (file: File) => {
    const isValid = file.type === "image/png" || file.type === "image/jpeg";
    if (!isValid) {
      alert("Please upload a valid image file");
      return;
    }
    generatePreview(file);
    setFile(file);
    setRemoveFile(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("submit");
  };

  return (
    <div className="form-cont">
      <form onSubmit={handleSubmit} className="app-form submit-paymaster-form">
        <div className="wrapper max-w-xl m-auto">
          <header className="form-header">
            <div className="wrapper">
              <h1 className="font-bold text-paymasters-purple text-lg text-center">
                Submit Paymaster
              </h1>
            </div>
          </header>
          <div className="form-body !my-12">
            {/* <div className="wrapper"> */}
            <div className="form-control">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-input"
                placeholder="Name"
              />
            </div>
            <div className="form-control">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="form-input"
                placeholder="Address"
              />
            </div>
            <div className="form-control">
              <label htmlFor="logo">Please upload your logo here</label>
              <CustomDragDrop
                updateFileUpload={handleUpdateFileUpload}
                removeFile={removeFile}
              />
            </div>
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

            {/* </div> */}
          </div>
          <div className="action-cont">
            <button type="submit" className="cta">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

SubmitPaymaster.getLayout = (page: ReactElement) => {
  return <DepLayout>{page}</DepLayout>;
};

export default SubmitPaymaster;
