import SubTitle from "./SubTitle";
import Toggle, { IToggle } from "./Toggle";

interface IBikeComplement {
  complement: string;
}

const BikeComplement: React.FC<IBikeComplement & IToggle> = ({
  complement,
  isToggled,
  setIsToggled,
}) => {
  return (
    <div className={`mt-28 flex flex-row justify-between gap-10`}>
      <SubTitle>
        {complement}
        {"?"}
      </SubTitle>
      <Toggle isToggled={isToggled} setIsToggled={setIsToggled} />
    </div>
  );
};

export default BikeComplement;
