import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import slugify from 'slugify';
import { Skeleton } from './ui/Skeleton';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TPoste } from '../features/api/nicokaSlice.ts';

const TOKEN_API = import.meta.env.VITE_TOKEN;
const NICOKA_API = import.meta.env.VITE_NICOKA_API;

const Search = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [selectedPoste, setSelectedPoste] = useState<string>('');
  const [searchParams] = useSearchParams();
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const tempCategories: string[] = [];
    const tempStates: string[] = [];
    if (!isLoading && data.length > 1) {
      // file deepcode ignore CallbackShouldReturn: <please specify a reason of ignoring this>
      data.map((poste: TPoste) => {
        if (poste.address_state) {
          tempStates.push(poste.address_state);
        }
        if (poste.industry__formated) {
          tempCategories.push(poste.industry__formated);
        }
      });
      setCategories(
        tempCategories.filter((x, i) => tempCategories.indexOf(x) === i),
      );
      setStates(tempStates.filter((x, i) => tempStates.indexOf(x) === i));
    }
  }, [data]);

  if (isLoading || error)
    return (
      <form>
        <div className="select">
          <Skeleton namedClass="" styles={{ width: '290px', height: '61px' }} />
        </div>
        <div className="select">
          <Skeleton namedClass="" styles={{ width: '290px', height: '61px' }} />
        </div>
        <Skeleton namedClass="" styles={{ width: '290px', height: '61px' }} />
        <Link to={`/`} className="rechercher-job">
          <Skeleton namedClass="" styles={{ width: '182px', height: '61px' }} />
        </Link>
      </form>
    );

  const formatedSearch = (element: string): string => {
    const temp = element
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9 ]/g, '');
    return slugify(temp, { replacement: '-', lower: true });
  };

  return (
    <div className="job-container">
      <h2>Je trouve mon poste</h2>
      <form>
        <div className="select">
          <select
            name="categorie"
            id="categorie"
            aria-label="Quel est la catégorie du poste ?"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" selected={!searchParams.get('category')}>
              Catégorie
            </option>
            {categories.map((category, index) => (
              <option
                value={category}
                key={index}
                selected={
                  searchParams.get('category') === formatedSearch(category)
                }
              >
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          <select
            name="region"
            id="region"
            aria-label="Dans quelle région recherchez-vous ?"
            onChange={(e) => setSelectedCounty(e.target.value)}
          >
            <option value="" selected={!searchParams.get('region')}>
              Région
            </option>
            {states.map((state, index) => (
              <option
                value={state}
                key={index}
                selected={searchParams.get('region') === formatedSearch(state)}
              >
                {state}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          name="post-type"
          id="post-type"
          placeholder="Intitulé du poste"
          value={selectedPoste}
          onChange={(e) => setSelectedPoste(e.target.value)}
        />
        <Link
          to={`/resultats?category=${formatedSearch(
            selectedCategory,
          )}&region=${formatedSearch(selectedCounty)}&poste=${formatedSearch(
            selectedPoste,
          )}`}
          className="rechercher-job"
        >
          Rechercher
        </Link>
      </form>
    </div>
  );
};

export default Search;
