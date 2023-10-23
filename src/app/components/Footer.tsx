import LinkArrow from "./LinkArrow";

interface IFooter {
  hideArrowBack?: boolean;
  pathUrlBack?: string;
  pathUrlNext: string;
}

const Footer: React.FC<IFooter> = ({
  hideArrowBack,
  pathUrlBack,
  pathUrlNext,
}) => {
  return (
    <div className="w-full h-16 bg-blue-500 flex flex-row items-center p-3 justify-between fixed bottom-0">
      {!hideArrowBack && pathUrlBack && (
        <LinkArrow isLeftArrow pathUrl={pathUrlBack}>
          Voltar
        </LinkArrow>
      )}
      <LinkArrow pathUrl={pathUrlNext}>Avançar</LinkArrow>
    </div>
  );
};

export default Footer;
