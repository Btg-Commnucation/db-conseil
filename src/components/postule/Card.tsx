import { TPoste } from "../../features/api/nicokaSlice";
import { Link } from "react-router-dom";

const Card = ({ poste }: { poste: TPoste }) => {
  return (
    <div className="card">
      {poste.address_state ? (
        <strong>{poste.address_state}</strong>
      ) : (
        <strong>Non précisé</strong>
      )}
      <div className="card-detail">
        {poste.industry__formated ? (
          <p>{poste.industry__formated}</p>
        ) : (
          <p>Non précisé</p>
        )}
        <h3>{poste.label}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: poste.description.slice(0, 250) + "...",
          }}
        ></p>
        {poste.reference && (
          <Link to={`/poste/${poste.reference}`} className="card-link">
            En savoir plus
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
