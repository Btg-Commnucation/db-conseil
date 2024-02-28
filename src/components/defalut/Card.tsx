import he from "he";
import { Link } from "react-router-dom";

type TCard = {
  divClass: string;
  titre: string;
  texte: string;
  lien: string;
  texteLien: string;
};

const Card = ({ divClass, titre, texte, lien, texteLien }: TCard) => {
  const createSlug = (lien: string): string => {
    const regexp = /^http(?:s)?:\/\/(?:www\.)?db-conseils\.(?:.+)\/(.+)$/;
    const matches = lien.match(regexp);
    if (matches && matches[1]) {
      return matches[1];
    } else {
      return "";
    }
  };

  return (
    <div className={divClass}>
      <h2>{he.decode(titre)}</h2>
      <div
        className="texte-fond"
        dangerouslySetInnerHTML={{ __html: texte }}
      ></div>
      <Link to={`/${createSlug(lien)}`}>{texteLien}</Link>
    </div>
  );
};

export default Card;
