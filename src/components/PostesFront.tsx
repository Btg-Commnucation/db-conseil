import { Link } from 'react-router-dom';
import { Skeleton } from './ui/Skeleton';
import Card from './postule/Card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TPoste } from '../features/api/nicokaSlice.ts';

const NICOKA_API = import.meta.env.VITE_NICOKA_API;
const TOKEN_API = import.meta.env.VITE_TOKEN;

const PostesFront = () => {
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

  if (isLoading || error)
    return (
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
    );

  return (
    <section className="job">
      <div className="container">
        <h2>Nos postes à la une</h2>
        <div className="card-container">
          {data.slice(0, 4).map((poste: TPoste, index: number) => (
            <Card poste={poste} key={index} />
          ))}
        </div>
        <Link className="offres-link" to="/nos-offres">
          Voir toutes nos offres
        </Link>
      </div>
    </section>
  );
};

export default PostesFront;
