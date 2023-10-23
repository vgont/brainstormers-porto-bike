import { useState } from "react";

interface IToggle {
  onclick: () => void;
}

const Toggle: React.FC<IToggle> = ({ onclick }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleOnClick = () => {
    onclick();
    setIsToggled(!isToggled);
  };
  return (
    <label className="relative inline-flex items-center mb-5 cursor-pointer">
      <input
        onClick={handleOnClick}
        type="checkbox"
        value=""
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium">
        {isToggled ? "Sim" : "Não"}
      </span>
    </label>
  );
};

export default Toggle;
