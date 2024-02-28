/* eslint-disable react-hooks/exhaustive-deps */
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import he from 'he';
import {Skeleton} from './ui/Skeleton';
import {useQuery} from '@tanstack/react-query';
import {Tmenu} from '../features/api/menuSlice.ts';

const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API;

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const response = await axios<Tmenu>(
        `${WORDPRESS_API}/better-rest-endpoints/v1/menus/main-menu`,
      );
      return response.data;
    },
  });

  if (isLoading || error) {
    return (
      <nav className="menu-main-menu-container">
        <div
          className={`menu-btn ${open && 'open'}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="menu-btn__burger"></div>
        </div>
        <ul id="main-menu" className="menu" hidden>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              styles={{ width: '99px', height: '27px' }}
              namedClass="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"
              key={index}
            ></Skeleton>
          ))}
          <div className="form-button__container">
            {' '}
            <Link to="/je-postule">Je postule</Link>{' '}
            <Link to="/je-recrute">Je recrute</Link>
          </div>
        </ul>
      </nav>
    );
  }

  return (
    <header>
      <Link className="homeurl" to="/">
        <span className="screen-reader-text">Retourner à l'accueil</span>
        <img
          src="/top-logo.svg"
          alt="DB Conseil, Un accompagnement sur-mesure"
        />
      </Link>
      <div className="main-menu__container">
        <nav className="menu-main-menu-container">
          <div
            className={`menu-btn ${open && 'open'}`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className="menu-btn__burger"></div>
          </div>
          <ul id="main-menu" className="menu" hidden>
            {data!.map((element) => (
              <li
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"
                key={element.ID}
              >
                <Link to={`/${element.slug}`}>{he.decode(element.title)}</Link>
              </li>
            ))}
            <div className="form-button__container">
              {' '}
              <Link to="/je-postule">Je postule</Link>{' '}
              <Link to="/je-recrute">Je recrute</Link>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
