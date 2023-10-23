import { PropsWithChildren } from "react";

const SubTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-base font-medium">{children}</h1>;
};

export default SubTitle;
