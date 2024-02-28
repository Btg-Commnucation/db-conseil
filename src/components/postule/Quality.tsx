import he from "he";

const Quality = ({
  quality,
}: {
  quality: { titre: string; texte: string };
}) => {
  return (
    <div className="texte-card">
      <h3>{he.decode(quality.titre)}</h3>
      <p>{he.decode(quality.texte)}</p>
    </div>
  );
};

export default Quality;
