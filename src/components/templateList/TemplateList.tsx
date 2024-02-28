/* eslint-disable react-hooks/exhaustive-deps */
import {TPage} from '../../routes/Page';
import Search from '../Search';
import axios from 'axios';
import JobList from './JobList';
import {useQuery} from '@tanstack/react-query';
import Error from '../Error.tsx';
import {Skeleton} from '../ui/Skeleton.tsx';

export interface IList extends TPage {
  acf: {
    main_title: string;
    titre_carte: string;
    type_doffre: string;
  };
}

const TOKEN_API = import.meta.env.VITE_TOKEN;
const NICOKA_API = import.meta.env.VITE_NICOKA_API;

const TemplateList = ({ pageInfo }: { pageInfo: IList }) => {
  const config = {
    headers: { Authorization: `Bearer ${TOKEN_API}` },
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['postes'],
    queryFn: async () => {
      const response = await axios(`${NICOKA_API}`, config);
      return response.data.data.reverse();
    },
  });

  if (isLoading)
    return (
      <Skeleton namedClass="" styles={{ width: '100vw', height: '100vh' }} />
    );

  if (error) return <Error />;

  return (
    <main className="list-page">
      <section className="hero-banner">
        <div className="background-image"></div>
        <div className="gradient">
          <div className="container">
            <h1>{pageInfo.acf.main_title}</h1>
            <Search />
          </div>
        </div>
      </section>
      <section className="job symbols-offer">
        <div className="container">
          <h2>{pageInfo.acf.titre_carte}</h2>
          <JobList postes={data} />
        </div>
      </section>
    </main>
  );
};

export default TemplateList;
