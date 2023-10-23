import Image from "next/image";

import LinkArrow from "./LinkArrow";

interface IHeader {
  hideHomeButton?: boolean;
}

const Header: React.FC<IHeader> = ({ hideHomeButton }) => {
  return (
    <header className="w-full h-20 bg-blue-500 flex flex-row items-center p-2">
      {!hideHomeButton && (
        <LinkArrow isLeftArrow pathUrl={"/"}>
          Home
        </LinkArrow>
      )}

      <div className="ml-auto">
        <Image
          alt="bike_img"
          src={"/images/BikeHeader.svg"}
          width={60}
          height={60}
        />
      </div>
    </header>
  );
};

export default Header;
