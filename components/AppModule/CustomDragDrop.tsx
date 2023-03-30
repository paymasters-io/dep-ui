import Image from "next/image";
import { DragEvent, FormEvent, useEffect, useRef, useState } from "react";
import add_photo_alternate_icon from "../../assets/icons/add_photo_alternate.svg";

const CustomDragDrop = ({
  updateFileUpload,
  removeFile,
}: {
  updateFileUpload: (file: File) => void;
  removeFile?: boolean;
}) => {
  // file input ref
  const FileInput = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLInputElement>;

  // drag state
  const [dragActive, setDragActive] = useState(false);

  // handle drag events
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e.type);

    if (e.type === "dragover" || e.type === "dragenter") {
      setDragActive(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragActive(false);
    }
  };

  // handle drop event
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // console.log(e.dataTransfer.files);
      updateFileUpload(e.dataTransfer.files[0]);
      setDragActive(false);
    }
  };

  // handle change event
  const handleChange = (
    e: FormEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files && e.target.files.length > 0) {
      // console.log(e.target.files);
      updateFileUpload(e.target.files[0]);
    }
  };

  // remove file
  useEffect(() => {
    console.log("removeFile", removeFile);

    if (removeFile) {
      FileInput.current.value = "";
    }
  }, [removeFile]);

  return (
    <div onDragEnter={handleDrag} className="custom-drag-drop form-control">
      <input
        ref={FileInput}
        type="file"
        name="file"
        id="file"
        onChange={handleChange}
        accept="image/jpeg, image/jpg, image/png"
      />
      <label className={`drag-drop-container ${dragActive ? "active" : ""}`}>
        <div className="drag-drop-content">
          <div className="img-cont">
            <Image
              src={add_photo_alternate_icon}
              width={32}
              height={32}
              alt="add alternate icon"
            />
          </div>
          <div className="drag-drop-text">
            <p className="font-bold text-paymasters-purple">
              Tap or drag and drop to upload Image
            </p>
            <span>PNG, JPEG</span>
          </div>
        </div>
      </label>
      {dragActive && (
        <div
          className="drag-file-overlay"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </div>
  );
};

export default CustomDragDrop;
