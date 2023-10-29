import { PropsWithChildren } from "react";
import useBikeStore from "../stores/useBikeStore";

interface IInputField {
  idName: string;
  setStateFunction: (value: any) => void;
  typeOfInput: string;
  maxLengthOfInput: number;
}
const InputField: React.FC<IInputField & PropsWithChildren> = ({
  idName,
  children,
  typeOfInput,
  maxLengthOfInput,
  setStateFunction,
}) => {
  const { isElectric } = useBikeStore();

  return (
    <div>
      <label htmlFor={idName}>{children}</label>
      <input
        type={typeOfInput}
        maxLength={maxLengthOfInput}
        min={typeOfInput === "number" ? 0 : undefined}
        max={typeOfInput === "number" ? (isElectric ? 3 : 8) : undefined}
        id={idName}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => setStateFunction(e.target.value)}
      />
    </div>
  );
};

export default InputField;
