import { TImage } from "../../App";
import { TPage } from "../../routes/Page";
import he from "he";
import FormContainer from "./FormContainer";

export interface IRecrute extends TPage {
  acf: {
    image_hero_banner: TImage;
    hero_banner_texte: string;
    titre_partie_deux: string;
    etape_accompagnement: {
      image: TImage;
      titre_etape: string;
      nom_etape: string;
      texte_etape: string;
    }[];
    titre_formulaire_de_contact: string;
  };
}

const Recrute = ({ data }: { data: IRecrute }) => {
  return (
    <main className="recrute">
      <section className="hero-banner">
        <div className="container">
          <div className="image-container">
            <img
              src={data.acf.image_hero_banner.url}
              alt={data.acf.image_hero_banner.alt}
            />
          </div>
          <div className="hero-banner__content">
            <h1>{he.decode(data.title)}</h1>
            <div
              className="content-texte"
              dangerouslySetInnerHTML={{ __html: data.acf.hero_banner_texte }}
            ></div>
          </div>
        </div>
      </section>
      <section className="accompagnement">
        <div className="container">
          <h2>{he.decode(data.acf.titre_partie_deux)}</h2>
          <ul>
            {data.acf.etape_accompagnement.map((etape, index) => (
              <li key={index}>
                <div className="etape-image-container">
                  <img src={etape.image.url} alt={etape.image.alt} />
                </div>
                <h3>{he.decode(etape.titre_etape)}</h3>
                <h3>{he.decode(etape.nom_etape)}</h3>
                <p>{he.decode(etape.texte_etape)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="contact-form">
        <div className="container">
          <h2>{he.decode(data.acf.titre_formulaire_de_contact)}</h2>
          <FormContainer />
        </div>
      </section>
      <section className="photo-bot">
        <div className="gradient-bottom"></div>
        <div className="gradient-second"></div>
      </section>
    </main>
  );
};

export default Recrute;
