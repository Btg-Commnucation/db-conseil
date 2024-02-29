/* eslint-disable react-hooks/exhaustive-deps */
import {Link} from 'react-router-dom';
import axios from 'axios';
import {TFooter} from '../features/api/menuSlice.ts';
import he from 'he';
import FooterMenu from './FooterMenu.tsx';
import {useQuery} from '@tanstack/react-query';

const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API;
const Footer = () => {
  const createSlug = (lien: string): string => {
    const regexp = /^http(?:s)?:\/\/(?:admin\.)?db-conseils\.(?:.+)\/(.+)$/;
    const matches = lien.match(regexp);
    if (matches && matches[1]) {
      return matches[1];
    } else {
      return '';
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['Footer'],
    queryFn: async () => {
      const response = await axios<TFooter>(
        `${WORDPRESS_API}/better-rest-endpoints/v1/options/acf`,
      );
      return response.data;
    },
  });

  if (isLoading || error) return <p>Chargement ...</p>;

  return (
    <footer>
      <div className="container">
        <section className="hero-footer">
          <div className="widget-container">
            <img
              src="/top-logo.svg"
              alt="DB conseil, un accompagnement sur-mesure"
            />
            <div dangerouslySetInnerHTML={{ __html: data!.adresse }}></div>
          </div>
          <div className="widget-container">
            <li className="widget_text">
              <div className="textwidget">
                {data!.linkedin.map(({ lien }, index) => (
                  <p key={index}>
                    <a href={lien.url} target={lien.target}>
                      {he.decode(lien.title)}
                    </a>
                  </p>
                ))}
              </div>
            </li>
          </div>
          <FooterMenu />
        </section>
      </div>
      <section className="mentions">
        <p>
          <Link to={`/${createSlug(data!.mentions_legales.url)}`}>
            {he.decode(data!.mentions_legales.title)}
          </Link>{' '}
          | Site réalisé par :
          <a
            href={data!.realisation.url}
            target={data!.realisation.target}
            rel="noopener noreferrer"
          >
            {data!.realisation.title}
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
