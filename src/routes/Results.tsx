/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import {TPoste} from '../features/api/nicokaSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/results/HeroBanner';
import {Link, ScrollRestoration, useSearchParams} from 'react-router-dom';
import slugify from 'slugify';
import {Skeleton} from '../components/ui/Skeleton';
import {Helmet} from 'react-helmet';
import {useQuery} from '@tanstack/react-query';
import Error from '../components/Error.tsx';

const TOKEN_API = import.meta.env.VITE_TOKEN;
const NICOKA_API = import.meta.env.VITE_NICOKA_API;

const Results = () => {
  const [searchParams] = useSearchParams();
  const [searchData, setSearchData] = useState<TPoste[]>([]);
  const [sliceA, setSliceA] = useState(0);
  const [sliceB, setSliceB] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [pagination, setPagination] = useState<number[]>([]);
  const config = {
    headers: { Authorization: `Bearer ${TOKEN_API}` },
  };
  const formatedPoint = (element: string): string => {
    const temp = element
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9 ]/g, '');
    return slugify(temp, { replacement: '-', lower: true });
  };

  const filteredPostes = (postes: TPoste[]) => {
    const category = searchParams.get('category');
    const county = searchParams.get('region');
    const desirePoste = searchParams.get('poste');
    const newPostes = postes.filter((poste) => {
      if (category && county && desirePoste) {
        return (
          formatedPoint(
            poste.industry__formated ? poste.industry__formated : 'zfzfojo',
          ) === category &&
          formatedPoint(
            poste.address_state ? poste.address_state : 'zfzfojo',
          ) === county &&
          formatedPoint(poste.label) === desirePoste
        );
      } else if (category && county) {
        return (
          formatedPoint(
            poste.industry__formated ? poste.industry__formated : 'zfzfojo',
          ) === category &&
          formatedPoint(
            poste.address_state ? poste.address_state : 'zfzfojo',
          ) === county
        );
      } else if (category && desirePoste) {
        return (
          formatedPoint(
            poste.industry__formated ? poste.industry__formated : 'zfzfojo',
          ) === category && formatedPoint(poste.label) === desirePoste
        );
      } else if (county && desirePoste) {
        return (
          formatedPoint(
            poste.address_state ? poste.address_state : 'zfzfojo',
          ) === county && formatedPoint(poste.label) === desirePoste
        );
      } else if (category) {
        return (
          formatedPoint(
            poste.industry__formated ? poste.industry__formated : 'zfzfojo',
          ) === category
        );
      } else if (county) {
        return (
          formatedPoint(
            poste.address_state ? poste.address_state : 'zfzfojo',
          ) === county
        );
      } else if (desirePoste) {
        return formatedPoint(poste.label).includes(desirePoste);
      } else {
        return poste;
      }
    });

    const updatedData = [...newPostes];
    setSearchData(updatedData);
    const dataLength = Math.ceil(updatedData.length / 8);
    const paginationArray: number[] = [];
    for (let i = 1; i <= dataLength; i++) {
      paginationArray.push(i);
    }
    setPagination(paginationArray);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['postes'],
    queryFn: async () => {
      const response = await axios(`${NICOKA_API}`, config);
      setSearchData(response.data.data.reverse());
      filteredPostes(response.data.data.reverse());
      return response.data.data.reverse();
    },
  });

  useEffect(() => {
    setPagination([]);
    setSliceA(0);
    setSliceB(8);
    setCurrentSlide(1);
    if (data) {
      filteredPostes(data);
    }
  }, [
    searchParams.get('category'),
    searchParams.get('region'),
    searchParams.get('poste'),
  ]);

  if (error) {
    console.log(error);
    return <Error />;
  }
  if (isLoading)
    return (
      <>
        <ScrollRestoration />
        <Header />
        <main className="list-page">
          <section className="job">
            <div className="container">
              <h4 className="success">{`0 offres correspondent à votre demande`}</h4>
              <div className="card-container">
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
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );

  const handleClick = (number: number) => {
    window.scrollTo(0, 0);
    if (number > currentSlide) {
      setSliceA(sliceA + 8 * (number - currentSlide));
      setSliceB(sliceB + 8 * (number - currentSlide));
    } else if (number < currentSlide) {
      setSliceA(sliceA - 8 * (currentSlide - number));
      setSliceB(sliceB - 8 * (currentSlide - number));
    }
    setCurrentSlide(number);
  };

  return (
    <>
      <ScrollRestoration />
      <Header />
      <main className="list-page">
        <HeroBanner />
        <Helmet>
          <title>Résultats de votre recherche - DB Conseils</title>
        </Helmet>
        <section className="job">
          <div className="container">
            <h4 className="success">{`${searchData.length} offres correspondent à votre demande`}</h4>
            <div className="card-container">
              {searchData
                .slice(sliceA, sliceB)
                .map((poste: TPoste, index: number) => (
                  <div className="card" key={index}>
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
                          __html: poste.description.slice(0, 250) + '...',
                        }}
                      ></p>
                      {poste.reference && (
                        <Link
                          to={`/poste/${poste.reference}`}
                          className="card-link"
                        >
                          En savoir plus
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <ul className="pagination">
              {pagination.map((number) => (
                <li
                  className={number === currentSlide ? 'active-page' : ''}
                  key={number}
                  onClick={() => handleClick(number)}
                >
                  {number}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Results;
