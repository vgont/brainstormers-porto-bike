import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-lg font-semibold mt-16 w-1/2 text-center">
      {children}
    </h1>
  );
};

export default Title;
