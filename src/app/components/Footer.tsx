import LinkArrow from "./LinkArrow";

interface IFooter {
  hideArrowBack?: boolean;
  pathUrl: string;
}

const Footer: React.FC<IFooter> = ({ hideArrowBack, pathUrl }) => {
  return (
    <div className="w-full h-20 bg-blue-500 flex flex-row items-center p-3 justify-between fixed bottom-0">
      {!hideArrowBack && (
        <LinkArrow isLeftArrow pathUrl={"/"}>
          Voltar
        </LinkArrow>
      )}
      <LinkArrow pathUrl={pathUrl}>Avançar</LinkArrow>
    </div>
  );
};

export default Footer;
