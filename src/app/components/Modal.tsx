interface IModal {
  isOpen: boolean;
}

const Modal: React.FC<IModal> = ({ isOpen }) => {
  if (isOpen) return <div></div>;
};
