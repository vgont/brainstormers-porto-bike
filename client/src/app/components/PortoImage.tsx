import Image from "next/image";

const PortoImage: React.FC = () => {
  return (
    <Image
      className="mt-24"
      src={"/images/porto.png"}
      alt="porto_img"
      width={284}
      height={134}
    />
  );
};

export default PortoImage;
