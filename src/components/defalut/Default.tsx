import { TImage } from "../../App";
import { TPage } from "../../routes/Page";
import he from "he";
import Team from "./Team";
import Card from "./Card";

export interface IDefault extends TPage {
  acf: {
    cabinet: string;
    texte_court: string;
    texte_long_first: string;
    image_first: TImage;
    image_second: TImage;
    texte_long_second: string;
    titre_qui_sommes_nous: string;
    image_pauline: TImage;
    linkedin_pauline: string;
    pauline: string;
    image_stephanie: TImage;
    linkedin_stephanie: string;
    stephanie: string;
    texte_qui_sommes_nous: string;
    titre_fond_bleu: string;
    texte_fond_bleu: string;
    lien_fond_bleu: string;
    texte_lien_fond_bleu: string;
    titre_fond_blanc: string;
    texte_fond_blanc: string;
    lien_fond_blanc: string;
    texte_lien_fond_blanc: string;
  };
}

const Default = ({ data }: { data: IDefault }) => {
  return (
    <main className="cabinet">
      <section className="hero-banner">
        <div className="container">
          <div className="article-container">
            <div className="left-side">
              <h1>{he.decode(data.title)}</h1>
              <h2>{he.decode(data.acf.cabinet)}</h2>
              <div
                className="short-text"
                dangerouslySetInnerHTML={{ __html: data.acf.texte_court }}
              ></div>
              <div
                className="paragraphe"
                dangerouslySetInnerHTML={{ __html: data.acf.texte_long_first }}
              ></div>
            </div>
            <div className="right-side">
              <img
                src={data.acf.image_first.url}
                alt={data.acf.image_first.alt}
                title={data.acf.image_first.title}
              />
            </div>
          </div>
          <div className="article-container bottom-article">
            <div className="left-side">
              <img
                src={data.acf.image_second.url}
                alt={data.acf.image_second.alt}
                title={data.acf.image_second.title}
              />
            </div>
            <div
              className="right-side"
              dangerouslySetInnerHTML={{ __html: data.acf.texte_long_second }}
            ></div>
          </div>
        </div>
      </section>
      <section className="the-team">
        <div className="container">
          <h2>{he.decode(data.acf.titre_qui_sommes_nous)}</h2>
          <aside>
            <Team
              idName="pauline"
              image={data.acf.image_pauline}
              nom={data.acf.pauline}
              lien={data.acf.linkedin_pauline}
            />
            <img
              src="/dot-width-white.svg"
              className="dot-image"
              alt="Petite virgule blanche"
            />
            <Team
              idName="stephanie"
              image={data.acf.image_stephanie}
              nom={data.acf.stephanie}
              lien={data.acf.linkedin_stephanie}
            />
          </aside>
          <article
            dangerouslySetInnerHTML={{ __html: data.acf.texte_qui_sommes_nous }}
          ></article>
        </div>
      </section>
      <section className="post-recruit">
        <Card
          divClass="postule"
          titre={data.acf.titre_fond_bleu}
          texte={data.acf.texte_fond_bleu}
          lien={data.acf.lien_fond_bleu}
          texteLien={data.acf.texte_lien_fond_bleu}
        />
        <Card
          divClass="recrute"
          titre={data.acf.titre_fond_blanc}
          texte={data.acf.texte_fond_blanc}
          lien={data.acf.lien_fond_blanc}
          texteLien={data.acf.texte_lien_fond_blanc}
        />
      </section>
    </main>
  );
};

export default Default;
