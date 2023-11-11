import useBikeStore from "../stores/useBikeStore";
import Button from "./Button";

interface IBikeTypes {
  bikeTypes: string[];
}

const BikeTypes: React.FC<IBikeTypes> = ({ bikeTypes }) => {
  const { setType } = useBikeStore();

  return (
    <div className="flex flex-col mt-24 gap-10">
      {bikeTypes.map((bikeType) => (
        <Button key={bikeType} onclick={() => setType(bikeType)}>
          {bikeType}
        </Button>
      ))}
    </div>
  );
};

export default BikeTypes;
