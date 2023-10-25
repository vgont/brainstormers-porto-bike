import LinkArrow from "./LinkArrow";

interface IFooter {
  hideArrowBack?: boolean;
  hideArrowNext?: boolean;
  pathUrlBack?: string;
  pathUrlNext?: string;
}

const Footer: React.FC<IFooter> = ({
  hideArrowBack,
  hideArrowNext,
  pathUrlBack,
  pathUrlNext,
}) => {
  return (
    <div className="w-full h-16 bg-blue-500 flex flex-row items-center p-3 justify-between mt-auto">
      {!hideArrowBack && pathUrlBack && (
        <LinkArrow isLeftArrow pathUrl={pathUrlBack}>
          Voltar
        </LinkArrow>
      )}
      {!hideArrowNext && pathUrlNext && (
        <LinkArrow pathUrl={pathUrlNext}>Avançar</LinkArrow>
      )}
    </div>
  );
};

export default Footer;
