import { PropsWithChildren } from "react";

interface IInputField {
  idName: string;
  setStateFunction: (value: string) => void;
}
const InputField: React.FC<IInputField & PropsWithChildren> = ({
  idName,
  children,
  setStateFunction,
}) => {
  return (
    <div>
      <label htmlFor={idName}>{children}</label>
      <input
        type="text"
        maxLength={13}
        id={idName}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => setStateFunction(e.target.value)}
      />
    </div>
  );
};

export default InputField;
