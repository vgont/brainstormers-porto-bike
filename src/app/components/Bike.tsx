import Image from "next/image";
import { bike } from "../types/types";

const Bike: React.FC<{ bike: bike }> = ({ bike }) => {
  const handleAge = (age: number) => {
    if (age !== 1) return `${age} anos`;
    return `${age} ano`;
  };
  const handleCategory = (category: string, powerWatts: number | null) => {
    if (category === "Tradicional") return category;
    return `${category}, ${powerWatts} watts`;
  };

  return (
    <div className="flex flex-row items-center m-10 bg-gray-300 rounded w-1/3 p-3 border border-black">
      <Image
        src={"/images/bike.jpg"}
        alt="bike"
        width={200}
        height={200}
        className="w-1/4 h-fit mr-3"
      />
      <div className="flex flex-col gap-2 w-full">
        <p className="font-semibold bg-white w-full rounded border border-black pl-2">{`N.º de série: ${bike.serialNumber}`}</p>
        <p className="font-semibold bg-white w-full rounded border border-black pl-2">{`Marca: ${bike.brand}`}</p>
        <p className="font-semibold bg-white w-full rounded border border-black pl-2">{`Modelo: ${bike.model}`}</p>
        <p className="font-semibold bg-white w-full rounded border border-black pl-2">{`Tempo de uso: ${handleAge(
          bike.age
        )}`}</p>
        <p className="font-semibold bg-white w-full rounded border border-black pl-2">{`Categoria: ${handleCategory(
          bike.category,
          bike.powerInWatts
        )}`}</p>
      </div>
    </div>
  );
};

export default Bike;
