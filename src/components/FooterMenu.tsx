import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Tmenu } from '../features/api/menuSlice.ts';
import { Link } from 'react-router-dom';

const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API;

const FooterMenu = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const response = await axios<Tmenu>(
        `${WORDPRESS_API}/better-rest-endpoints/v1/menus/main-menu`,
      );
      return response.data;
    },
  });

  if (isLoading || error) return <p>Chargement ...</p>;

  return (
    <div className="widget-container">
      <li id="nav_menu-3" className="widget widget_nav_menu">
        <h2 className="widgettitle">Retrouvez sur notre site :</h2>
        <div className="menu-footer-main-container">
          <ul id="menu-footer-main" className="menu">
            {data!.map((element) => (
              <li
                key={element.ID}
                id="menu-item-60"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60"
              >
                <Link to={`/${element.slug}`}>{element.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </div>
  );
};

export default FooterMenu;
