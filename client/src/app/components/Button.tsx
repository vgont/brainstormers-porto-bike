"use client";

import Image from "next/image";
import { PropsWithChildren } from "react";
import useBikeStore from "../stores/useBikeStore";

interface IButtonProps {
  isBlueColor?: boolean;
  isPhotoButton?: boolean;
  onclick?: () => void;
}

const Button: React.FC<IButtonProps & PropsWithChildren> = ({
  children,
  isBlueColor,
  isPhotoButton,
  onclick,
}) => {
  const { type } = useBikeStore();

  return (
    <button
      onClick={onclick}
      className={`flex flex-row h-14 p-5 justify-center items-center rounded-lg font-semibold 
            ${isPhotoButton ? "w-60 gap-5" : "w-52"} 
            ${isBlueColor ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}
            ${type === children && "border-2 border-black"}`}
    >
      {children}
      {isPhotoButton && (
        <Image
          className="mx-auto"
          src="/images/camera.png"
          alt="arrow img"
          width={31}
          height={27}
        />
      )}
    </button>
  );
};

export default Button;
