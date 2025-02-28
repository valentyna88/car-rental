import { Link } from 'react-router-dom';
import { formatMileage, getShortAddress } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import sprite from '../../assets/icons/sprite.svg';
import css from './CarCard.module.css';

const CarCard = ({ car }) => {
  const {
    id,
    year,
    brand,
    type,
    img,
    model,
    address,
    rentalPrice,
    mileage,
    rentalCompany,
  } = car;

  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(fav => fav.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <>
      <div className={css.carImageContainer}>
        <img src={img} alt={model} className={css.carImage} />
        <button
          type="button"
          className={css.favoriteButton}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg className={css.heartIcon} width={16} height={16}>
            <use
              xlinkHref={
                isFavorite
                  ? `${sprite}#icon-heart-blue`
                  : `${sprite}#icon-heart-white`
              }
            />
          </svg>
        </button>
      </div>
      <div className={css.info}>
        <div className={css.titleBox}>
          <p>
            {brand} <span className={css.model}>{model}</span>, {year}
          </p>
          <div>
            <p className={css.price}>${rentalPrice}</p>
          </div>
        </div>
        <p className={css.location}>
          {getShortAddress(address)} | {rentalCompany} |
        </p>
        <p className={css.details}>
          {type} | {formatMileage(mileage)} km
        </p>
      </div>
      <Link to={`${id}`} className={css.link}>
        Read more
      </Link>
    </>
  );
};

export default CarCard;
