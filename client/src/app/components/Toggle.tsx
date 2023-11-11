import React from "react";

export interface IToggle {
  isToggled: boolean;
  setIsToggled: (isToggled: boolean) => void;
}

const Toggle: React.FC<IToggle> = ({ isToggled, setIsToggled }) => {
  return (
    <label className="relative inline-flex items-center mb-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
      />
      <div
        className={`w-11 h-6 ${
          isToggled ? "bg-blue-500" : "bg-gray-200"
        } rounded-full ml-3 text-sm font-medium peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 relative`}
      >
        <div
          className={`absolute w-6 h-6 ${
            isToggled ? "bg-gray-100" : "bg-blue-500"
          } rounded-full transition-transform transform left-0 border border-blue-700 ${
            isToggled ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </div>
      <span className="ml-3 text-sm font-medium">
        {isToggled ? "Sim" : "Não"}
      </span>
    </label>
  );
};

export default Toggle;
