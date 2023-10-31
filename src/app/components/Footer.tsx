import LinkArrow from "./LinkArrow";

interface IFooter {
  hideArrowBack?: boolean;
  hideArrowNext?: boolean;
  pathUrlBack?: string;
  pathUrlNext?: string;
  isValidated?: boolean;
}

const Footer: React.FC<IFooter> = ({
  hideArrowBack,
  hideArrowNext,
  pathUrlBack,
  pathUrlNext,
  isValidated,
}) => {
  return (
    <div className="w-full h-16 bg-blue-500 flex flex-row items-center p-3 justify-between mt-20">
      {!hideArrowBack && pathUrlBack && (
        <LinkArrow isLeftArrow pathUrl={pathUrlBack}>
          Voltar
        </LinkArrow>
      )}
      {!hideArrowNext && pathUrlNext && (
        <LinkArrow pathUrl={pathUrlNext} isValidated={isValidated}>
          Avançar
        </LinkArrow>
      )}
    </div>
  );
};

export default Footer;
