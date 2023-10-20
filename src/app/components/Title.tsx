import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-lg font-bold"> {children}</h2>;
};

export default Title;
