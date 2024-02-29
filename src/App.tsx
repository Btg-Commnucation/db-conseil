/* eslint-disable react-hooks/exhaustive-deps */
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import axios from 'axios';
import PostesFront from './components/PostesFront';
import he from 'he';
import {Link} from 'react-router-dom';
import Card from './components/defalut/Card';
import {useQuery} from '@tanstack/react-query';
import Error from './components/Error.tsx';
import {Skeleton} from './components/ui/Skeleton.tsx';

export type TImage = {
  id: number;
  title: string;
  url: string;
  alt: string;
};

export type TFront = {
  id: number;
  title: string;
  slug: string;
  content: string;
  template: string;
  acf: {
    main_titlre: string;
    image_membre_un: TImage;
    lien_linkedin_membre_un: string;
    nom_membre_un: string;
    image_membre_deux: TImage;
    lien_linkedin_membre_deux: string;
    nom_membre_deux: string;
    titre_cabinet_principal: string;
    texte_cabinet: string;
    lien_page_cabinet: string;
    texte_lien_page_cabinet: string;
    titre_fond_bleu: string;
    texte_fond_bleu: string;
    lien_fond_bleu: string;
    texte_lien_fond_bleu: string;
    titre_fond_blanc: string;
    texte_fond_blanc: string;
    lien_fond_blanc: string;
    texte_lien_fond_blanc: string;
    titre_temoignages: string;
  };
  yoast: {
    yoast_wpseo_metadesc: string;
  };
};

const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API;

const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['accueil'],
    queryFn: async () => {
      const response = await axios<TFront>(
        `${WORDPRESS_API}/better-rest-endpoints/v1/page/accueil`,
      );
      return response.data;
    },
  });

  if (error) return <Error />;

  if (isLoading || !data)
    return (
      <>
        <Header />
        <main className="front-page">
          <section className="hero-banner">
            <div className="background-image"></div>
            <div className="gradient">
              <div className="container">
                <h1>Et si on envisageait le recrutement autrement ?</h1>
                <Search />
              </div>
            </div>
          </section>
          <Skeleton
            namedClass=""
            styles={{ width: '100vw', height: '100vh' }}
          />
        </main>
        <Footer />
      </>
    );

  const createSlug = (lien: string): string => {
    const regexp = /^http(?:s)?:\/\/(?:admin\.)?db-conseils\.(?:.+)\/(.+)$/;
    const matches = lien.match(regexp);
    if (matches && matches[1]) {
      return matches[1];
    } else {
      return '';
    }
  };

  return (
    <>
      <Header />
      <main className="front-page">
        <section className="hero-banner">
          <div className="background-image"></div>
          <div className="gradient">
            <div className="container">
              <h1>Et si on envisageait le recrutement autrement ?</h1>
              <Search />
            </div>
          </div>
        </section>
        <PostesFront />
        <section className="cabinet">
          <div className="container">
            <aside>
              <div id="stephanie">
                <img
                  src={data!.acf.image_membre_un.url}
                  alt={data!.acf.image_membre_un.alt}
                />
                <div className="link-container">
                  <a
                    rel="noopener noreferrer"
                    href={data!.acf.lien_linkedin_membre_un}
                  >
                    {he.decode(data!.acf.nom_membre_un)}
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href={data!.acf.lien_linkedin_membre_deux}
                  >
                    {he.decode(data!.acf.nom_membre_deux)}
                  </a>
                </div>
              </div>
            </aside>
            <article>
              <h2>{he.decode(data!.acf.titre_cabinet_principal)}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data!.acf.texte_cabinet,
                }}
              ></div>
              <Link to={createSlug(data!.acf.lien_page_cabinet)}>
                {he.decode(data!.acf.texte_lien_page_cabinet)}
              </Link>
            </article>
          </div>
          <span className="telescope"></span>
        </section>
        <section className="post-recruit">
          <Card
            divClass="postule"
            titre={data!.acf.titre_fond_bleu}
            texte={data!.acf.texte_fond_bleu}
            lien={data!.acf.lien_fond_bleu}
            texteLien={data!.acf.texte_lien_fond_bleu}
          />
          <Card
            divClass="recrute"
            titre={data!.acf.titre_fond_blanc}
            texte={data!.acf.texte_fond_blanc}
            lien={data!.acf.lien_fond_blanc}
            texteLien={data!.acf.texte_lien_fond_blanc}
          />
        </section>
        <section className="temoignages">
          <div className="container">
            <div className="title-container">
              <h2>{data!.acf.titre_temoignages}</h2>
            </div>
            <h3 className="avenir">À venir</h3>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
