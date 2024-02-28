/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {Link, ScrollRestoration, useParams} from 'react-router-dom';
import {TPoste} from '../features/api/nicokaSlice.ts';
import Header from '../components/Header.tsx';
import HeroBanner from '../components/postes/HeroBanner.tsx';
import he from 'he';
import Footer from '../components/Footer.tsx';
import FormContainer from '../components/postes/FormContainer.tsx';
import {Skeleton} from '../components/ui/Skeleton.tsx';
import {Helmet} from 'react-helmet';
import {useQuery} from '@tanstack/react-query';
import Error from '../components/Error.tsx';

const TOKEN_API = import.meta.env.VITE_TOKEN;
const NICOKA_API = import.meta.env.VITE_NICOKA_API;
const Poste = () => {
  const { slug } = useParams<{ slug: string }>();
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

  if (isLoading)
    return (
      <>
        <ScrollRestoration />
        <Header />
        <main className="front-page">
          <HeroBanner />
          <article className="job-description">
            <div className="container">
              <Link to="/nos-offres" className="back-offre">
                Retour aux offres
              </Link>
              <section className="title">
                <div className="title-container">
                  <h2>
                    <Skeleton
                      namedClass=""
                      styles={{ width: '300px', height: '48px' }}
                    />
                  </h2>
                  <p>
                    <Skeleton
                      namedClass=""
                      styles={{ width: '123px', height: '23px' }}
                    />
                  </p>
                  <p>
                    <Skeleton
                      namedClass=""
                      styles={{ width: '150px', height: '23px' }}
                    />
                  </p>
                </div>
                <strong>
                  <Skeleton
                    namedClass=""
                    styles={{ width: '110px', height: '41px' }}
                  />
                </strong>
              </section>
              <section className="details">
                <h3>Type d'offre</h3>
                <ul>
                  <li>
                    <Skeleton
                      namedClass=""
                      styles={{ width: '111px', height: '19px' }}
                    />
                  </li>
                  <li>
                    <Skeleton
                      namedClass=""
                      styles={{ width: '123px', height: '19px' }}
                    />
                  </li>
                  <li>
                    <Skeleton
                      namedClass=""
                      styles={{ width: '123px', height: '19px' }}
                    />
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </>
    );
  if (error) return <Error />;

  const poste = data.filter((poste: TPoste) => poste.reference === slug);

  return (
    <>
      <ScrollRestoration />

      <Header />
      <main className="front-page">
        <HeroBanner />
        <Helmet>
          <title>{`${he.decode(poste[0].label)} - DB Conseils`}</title>
        </Helmet>
        <article className="job-description">
          <div className="container">
            <Link to="/nos-offres" className="back-offre">
              Retour aux offres
            </Link>
            <section className="title">
              <div className="title-container">
                <h2>{he.decode(poste[0].label)}</h2>
                <p>{he.decode(poste[0].industry__formated)}</p>
                <p>{`REF : ${he.decode(poste[0].reference)}`}</p>
              </div>
              <strong>{he.decode(poste[0].address_state)}</strong>
            </section>
            <section className="details">
              <h3>Type d'offre</h3>
              <ul>
                <li>{`Ville : ${he.decode(poste[0].city)}`}</li>
                <li>{`Type de contrat : ${he.decode(
                  poste[0].contract_type__formated,
                )}`}</li>
                <li>{`Mobilité : ${he.decode(
                  poste[0].mobilityid__formated,
                )}`}</li>
              </ul>
            </section>
            <section className="information">
              {poste[0].description && (
                <div className="part-one">
                  <h3>Infos</h3>
                  {/* file deepcode ignore DOMXSS: <please specify a reason of ignoring this> */}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: poste[0].description,
                    }}
                  ></p>
                </div>
              )}
              {poste[0].requirements && (
                <div className="part-one">
                  <h3>Exigences</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: poste[0].requirements,
                    }}
                  ></p>
                </div>
              )}
              {poste[0].benefits && (
                <div className="part-one">
                  <h3>Avantages</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: poste[0].benefits,
                    }}
                  ></p>
                </div>
              )}
              {poste[0].salary_left && (
                <div className="part-one">
                  <h3>Salaire</h3>
                  <p>{`${he.decode(String(poste[0].salary_left))} ${he.decode(
                    String(poste[0].salary_right),
                  )} ${he.decode(poste[0].currency)} ${he.decode(
                    poste[0].salary_time_unit__formated,
                  )}`}</p>
                </div>
              )}
            </section>
          </div>
        </article>
        <section className="postuler-job">
          <FormContainer slug={slug!} />
        </section>
        <section className="photo-bot">
          <div className="gradient-bottom"></div>
          <div className="gradient-second"></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Poste;
