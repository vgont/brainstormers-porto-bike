import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { ImCheckmark2, ImCheckmark } from "react-icons/im";

interface IFileUploaderProps {
  idName: string;
  isBlueColor?: boolean;
}

const FileUploader: React.FC<IFileUploaderProps & PropsWithChildren> = ({
  children,
  isBlueColor,
  idName,
}) => {
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0)
      return setIsUploaded(true);
    if (event.target.files && event.target.files.length === 0)
      return setIsUploaded(false);
  };
  return (
    <div className="flex flex-row justify-center items-center gap-5">
      <label
        htmlFor={idName}
        className={`flex flex-row h-14 p-5 justify-center items-center rounded-lg font-semibold w-full gap-5 bg-blue-500 text-white`}
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
      <input type="file" id={idName} hidden onChange={handleFileUpload} />
      <span className="text-blue-600 text-2xl">
        {isUploaded ? ImCheckmark() : ImCheckmark2()}
      </span>
    </div>
  );
};

export default FileUploader;
