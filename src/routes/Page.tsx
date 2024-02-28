/* eslint-disable react-hooks/exhaustive-deps */
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import {ScrollRestoration, useParams} from 'react-router-dom';
import TemplateList, {IList} from '../components/templateList/TemplateList';
import Default, {IDefault} from '../components/defalut/Default';
import Contact, {IContact} from '../components/contact/Contact';
import {Helmet} from 'react-helmet';
import he from 'he';
import {Skeleton} from '../components/ui/Skeleton';
import Postules, {IPostule} from '../components/postule/Postules';
import Mention from '../components/mention/Mention';
import Recrute, {IRecrute} from '../components/recrute/Recrute';
import Error from '../components/Error';
import {useQuery} from '@tanstack/react-query';

export type TPage = {
  id: number;
  title: string;
  slug: string;
  content: string;
  template: string;
  yoast: {
    yoast_wpseo_metadesc: string;
  };
};

const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API;

const Page = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ['pages', slug],
    queryFn: async () => {
      const response = await axios<TPage[]>(
        `${WORDPRESS_API}/better-rest-endpoints/v1/pages`,
      );
      return response.data.filter((page) => page.slug === slug);
    },
  });

  if (isLoading)
    return (
      <>
        <ScrollRestoration />
        <Header />
        <Skeleton namedClass="" styles={{ width: '100vw', height: '100vh' }} />
        <Footer />
      </>
    );

  if (error || (data && data.length < 1)) return <Error />;

  return (
    <>
      <ScrollRestoration />
      <Header />
      <Helmet>
        <title>{`${he.decode(data![0].title)} - DB Conseils`}</title>
      </Helmet>
      {data![0].template === 'template-list' && (
        <TemplateList pageInfo={data![0] as IList} />
      )}
      {data![0].template === 'page' && <Default data={data![0] as IDefault} />}
      {data![0].template === 'template-contact' && (
        <Contact data={data![0] as IContact} />
      )}
      {data![0].template === 'template-postule' && (
        <Postules pageData={data![0] as IPostule} />
      )}
      {data![0].template === 'template-mentions' && <Mention data={data![0]} />}
      {data![0].template === 'template-recrute' && (
        <Recrute data={data![0] as IRecrute} />
      )}
      <Footer />
    </>
  );
};

export default Page;
