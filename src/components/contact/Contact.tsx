import { TImage } from "../../App";
import { TPage } from "../../routes/Page";
import he from "he";
import FormContact from "./FormContact";

export interface IContact extends TPage {
  acf: {
    image: TImage;
    logo: TImage;
    adresse_contract: string;
    titre_formulaire_de_contact: string;
    petit_texte: string;
  };
}

const Contact = ({ data }: { data: IContact }) => {
  return (
    <main className="contact">
      <section className="hero-banner">
        <div className="container">
          <h1>{he.decode(data.title)}</h1>
          <div className="adresse">
            <img src={data.acf.image.url} alt={data.acf.image.alt} />
            <div className="adresse-detail">
              <img src={data.acf.logo.url} alt={data.acf.logo.alt} />
              <div
                dangerouslySetInnerHTML={{ __html: data.acf.adresse_contract }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <div className="container">
          <h2>{he.decode(data.acf.titre_formulaire_de_contact)}</h2>
          <p>{he.decode(data.acf.petit_texte)}</p>
          <FormContact />
        </div>
      </section>
    </main>
  );
};

export default Contact;
