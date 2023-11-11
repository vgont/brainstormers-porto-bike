import { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col items-center h-full">{children}</div>;
};

export default Content;
