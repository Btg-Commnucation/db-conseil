/* eslint-disable react-hooks/exhaustive-deps */
import {TImage} from '../../App';
import {TPage} from '../../routes/Page';
import he from 'he';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Skeleton} from '../ui/Skeleton';
import Card from './Card';
import FormContainer from './FormContainer';
import Quality from './Quality';
import {useQuery} from '@tanstack/react-query';
import Error from '../Error.tsx';
import {TPoste} from '../../features/api/nicokaSlice.ts';

const TOKEN_API = import.meta.env.VITE_TOKEN;
const NICOKA_API = import.meta.env.VITE_NICOKA_API;

export interface IPostule extends TPage {
  acf: {
    titre_carte: string;
    lien_offres: string;
    texte_lien_offres: string;
    titre_information_un: string;
    titre_information_deux: string;
    titre_bottom: string;
    texte_bottom: string;
    image: TImage;
    nos_qualites: { titre: string; texte: string }[];
    lien_bottom: string;
    texte_lien: string;
    texte_post_lien: string;
    titre_envoie_candidature: string;
  };
}

const Postules = ({ pageData }: { pageData: IPostule }) => {
  const config = {
    headers: { Authorization: `Bearer ${TOKEN_API}` },
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['postes'],
    queryFn: async () => {
      const response = await axios(`${NICOKA_API}`, config);
      return response.data.data.reverse();
    },
  });

  const createSlug = (lien: string): string => {
    const regexp = /^http(?:s)?:\/\/(?:www\.)?db-conseils\.(?:.+)\/(.+)$/;
    const matches = lien.match(regexp);
    if (matches && matches[1]) {
      return matches[1];
    } else {
      return '';
    }
  };

  if (isLoading) {
    return (
      <main className="postule-recrute">
        <section id="start-description" className="hero-banner">
          <div className="container">
            <h1>{he.decode(pageData.title)}</h1>
          </div>
        </section>
        <section className="job">
          <div className="container">
            <h2>{he.decode(pageData.acf.titre_carte)}</h2>
            <div className="card-container">
              <>
                {Array.from({ length: 8 }).map((_, index) => (
                  <div className="card" key={index}>
                    <strong>
                      <Skeleton
                        namedClass=""
                        styles={{ width: '159px', height: '36px' }}
                      />
                    </strong>
                    <div className="card-detail">
                      <p>
                        <Skeleton
                          namedClass=""
                          styles={{ width: '87px', height: '24px' }}
                        />
                      </p>
                      <h3>
                        <Skeleton
                          namedClass=""
                          styles={{ width: '100%', height: '28px' }}
                        />
                      </h3>
                      <p>
                        <Skeleton
                          namedClass=""
                          styles={{ width: '100%', height: '72px' }}
                        />
                      </p>
                      <Link to={`#`} className="card-link">
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>
        </section>
        <section className="postuler-job">
          <div className="container">
            <h2>Envoyez-nous votre candidature spontanée</h2>
            <FormContainer />
          </div>
        </section>
        <section className="bottom-part">
          <div className="container">
            <h2>{he.decode(pageData.acf.titre_bottom)}</h2>
            <i>{he.decode(pageData.acf.texte_bottom)}</i>
            <div className="article-bottom">
              <aside>
                <img
                  src={pageData.acf.image.url}
                  alt={pageData.acf.image.alt}
                />
              </aside>
              <article>
                {pageData.acf.nos_qualites.map((quality, index) => (
                  <Quality quality={quality} key={index} />
                ))}
                <div className="lien-container">
                  <Link to={`/${createSlug(pageData.acf.lien_bottom)}`}>
                    {he.decode(pageData.acf.texte_lien)}
                  </Link>
                  <p>{he.decode(pageData.acf.texte_post_lien)}</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error) return <Error />;

  return (
    <main className="postule-recrute">
      <section id="start-description" className="hero-banner">
        <div className="container">
          <h1>{he.decode(pageData.title)}</h1>
        </div>
      </section>
      <section className="job">
        <div className="container">
          <h2>{he.decode(pageData.acf.titre_carte)}</h2>
          <div className="card-container">
            <>
              {data.slice(0, 4).map((poste: TPoste, index: number) => (
                <Card poste={poste} key={index} />
              ))}
            </>
          </div>
        </div>
      </section>
      <section className="postuler-job">
        <div className="container">
          <h2>Envoyez-nous votre candidature spontanée</h2>
          <FormContainer />
        </div>
      </section>
      <section className="bottom-part">
        <div className="container">
          <h2>{he.decode(pageData.acf.titre_bottom)}</h2>
          <i>{he.decode(pageData.acf.texte_bottom)}</i>
          <div className="article-bottom">
            <aside>
              <img src={pageData.acf.image.url} alt={pageData.acf.image.alt} />
            </aside>
            <article>
              {pageData.acf.nos_qualites.map((quality, index) => (
                <Quality quality={quality} key={index} />
              ))}
              <div className="lien-container">
                <Link to={`/${createSlug(pageData.acf.lien_bottom)}`}>
                  {he.decode(pageData.acf.texte_lien)}
                </Link>
                <p>{he.decode(pageData.acf.texte_post_lien)}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Postules;
