interface IModal {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: false) => void;
}

const Modal: React.FC<IModal> = ({ isModalOpen, setIsModalOpen }) => {
  if (isModalOpen)
    return (
      <div className="fixed inset-10 flex items-center justify-center z-50 w-3/4 h-2/3 m-auto bg-gray-400 rounded text-white">
        <button
          className="text-black font-extrabold self-start mr-auto ml-2"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
      </div>
    );
  return null;
};

export default Modal;
