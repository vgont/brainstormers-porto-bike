import SubTitle from "./SubTitle";
import Toggle from "./Toggle";

interface IBikeComplement {
  complement: string;
  onclick: () => void;
}

const BikeComplement: React.FC<IBikeComplement> = ({ complement, onclick }) => {
  return (
    <div className="mt-28 flex flex-row justify-between gap-10">
      <SubTitle>
        {complement}
        {"?"}
      </SubTitle>
      <Toggle onclick={onclick} />
    </div>
  );
};

export default BikeComplement;
