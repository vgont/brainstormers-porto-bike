import { ChangeEvent, PropsWithChildren } from "react";

interface IInputField {
  idName: string;
  setStateFunction: (value: any) => void;
  typeOfInput: string;
  maxLengthOfInput?: number;
  placeHolder: string;
  isValidated: boolean;
  valueInput: string | number;
}
const InputField: React.FC<IInputField & PropsWithChildren> = ({
  idName,
  children,
  typeOfInput,
  maxLengthOfInput,
  placeHolder,
  isValidated,
  valueInput,
  setStateFunction,
}) => {
  const handleInputChange = (e: any) => {
    setStateFunction(e);
  };

  return (
    <div>
      <label htmlFor={idName}>{children}</label>
      <input
        placeholder={placeHolder}
        type={typeOfInput}
        maxLength={maxLengthOfInput}
        id={idName}
        value={valueInput}
        className={`bg-gray-50 border ${
          isValidated
            ? "border-green-500 outline-green-500"
            : "border-red-600 outline-red-600"
        } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
