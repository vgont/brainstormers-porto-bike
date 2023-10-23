import { useState } from "react";
import Button from "./Button";

interface IBikeTypes {
  bikeTypes: string[];
}

const BikeTypes: React.FC<IBikeTypes> = ({ bikeTypes }) => {
  const [bikeType, setBikeType] = useState<string>("");

  return (
    <div className="flex flex-col mt-24 gap-10">
      {bikeTypes.map((type) => (
        <Button key={type} onclick={() => setBikeType(type)}>
          {type}
        </Button>
      ))}
      {bikeType}
    </div>
  );
};

export default BikeTypes;
