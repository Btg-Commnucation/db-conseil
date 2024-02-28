import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TPoste } from '../../features/api/nicokaSlice.ts';

const JobList = ({ postes }: { postes: TPoste[] }) => {
  const [sliceA, setSliceA] = useState(0);
  const [sliceB, setSliceB] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [pagination, setPagination] = useState<number[]>([]);

  useEffect(() => {
    const dataLength = Math.ceil(postes.length / 8);
    const paginationArray: number[] = [];
    for (let i = 1; i <= dataLength; i++) {
      paginationArray.push(i);
    }
    setPagination(paginationArray);
  }, [postes]);

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
      <div className="card-container">
        {postes.slice(sliceA, sliceB).map((poste, index) => (
          <div className="card" key={index}>
            {poste.address_state ? (
              <strong>{poste.address_state}</strong>
            ) : (
              <strong>Non précisé</strong>
            )}
            <div className="card-detail">
              <p>
                {poste.industry__formated
                  ? poste.industry__formated
                  : 'Non précisé'}
              </p>
              <h3>{poste.label}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: poste.description.slice(0, 250) + '...',
                }}
              ></p>
              {poste.reference && (
                <Link to={`/poste/${poste.reference}`} className="card-link">
                  En savoir plus
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        style={showAll ? { display: 'none' } : { display: 'flow-root' }}
        className="see-all__button"
        onClick={() => {
          setShowAll(true);
          setSliceB(8);
        }}
      >
        Voir toutes nos offres
      </button>
      <ul
        style={showAll ? { display: 'flex' } : { display: 'none' }}
        className="pagination"
      >
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
    </>
  );
};

export default JobList;
