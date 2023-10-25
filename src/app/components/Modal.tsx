import Image from "next/image";
import { ImCross } from "react-icons/im";

import SubTitle from "./SubTitle";

interface IModal {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: false) => void;
  pathImageExample: string;
}

const Modal: React.FC<IModal> = ({
  isModalOpen,
  setIsModalOpen,
  pathImageExample,
}) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click event from propagating to the parent div
  };

  if (isModalOpen)
    return (
      <div
        className="bg-opacity-80 inset-0 backdrop-blur fixed w-screen h-screen z-50"
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="fixed inset-0 flex flex-col items-center justify-center w-3/4 h-fit gap-12 p-2 m-auto bg-gray-300 rounded text-white border-solid border-2 border-gray-400 bg-opacity-80 backdrop-blur"
          onClick={stopPropagation}
        >
          <button
            className="text-gray-600 font-extrabold justify-self-start self-start"
            onClick={() => setIsModalOpen(false)}
          >
            {ImCross()}
          </button>
          <SubTitle>{"Tire a foto seguindo o exemplo: "}</SubTitle>
          <Image
            alt="example_nf"
            src={pathImageExample}
            width={260}
            height={260}
          />
        </div>
      </div>
    );
  return null;
};

export default Modal;
