import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";

import Modal from "./Modal";

interface IFileUploaderProps {
  idName: string;
  pathImageExample: string;
}

const FileUploader: React.FC<IFileUploaderProps & PropsWithChildren> = ({
  children,
  idName,
  pathImageExample,
}) => {
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0)
      return setIsUploaded(true);
    if (event.target.files && event.target.files.length === 0)
      return setIsUploaded(false);
  };

  const [isInfoRead, setIsInfoRead] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleInfoClick = () => {
    setIsInfoRead(true);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-5">
      <button className="text-blue-500 text-lg" onClick={handleInfoClick}>
        {BsFillInfoCircleFill()}
      </button>
      <label
        htmlFor={idName}
        className={`flex flex-row h-14 p-5 justify-center items-center rounded-lg font-semibold w-full gap-5
        ${isInfoRead ? "bg-blue-500 text-white" : "bg-blue-300 text-gray-400"}`}
      >
        {children}
        <Image
          className="mx-auto"
          src="/images/camera.png"
          alt="arrow img"
          width={31}
          height={31}
        />
      </label>
      <input
        type="file"
        id={idName}
        hidden
        onChange={handleFileUpload}
        disabled={isInfoRead ? false : true}
      />
      <span className="text-blue-600 text-2xl">
        {isUploaded ? ImCheckmark() : null}
      </span>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        pathImageExample={pathImageExample}
      />
    </div>
  );
};

export default FileUploader;
