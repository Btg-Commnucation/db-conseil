import { TImage } from "../../App";
import he from "he";

const Team = ({
  idName,
  image,
  nom,
  lien,
}: {
  idName: string;
  image: TImage;
  nom: string;
  lien: string;
}) => {
  return (
    <div id={idName}>
      <div className="img-container">
        <img src={image.url} alt={image.alt} title={nom} />
      </div>
      <a href={lien} target="_blank" rel="noopener noreferrer">
        {he.decode(nom)}
      </a>
    </div>
  );
};

export default Team;
