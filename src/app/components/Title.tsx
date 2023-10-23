import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-lg font-bold"> {children}</h1>;
};

export default Title;
