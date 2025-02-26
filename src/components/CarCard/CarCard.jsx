import { Link } from 'react-router-dom';
import css from './CarCard.module.css';
import sprite from '../../assets/icons/sprite.svg';

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

  const addressParts = address.split(',');
  const shortAddress = addressParts.slice(-2).join(' | ');
  const formattedMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <>
      <div className={css.carImageContainer}>
        <img src={img} alt={model} className={css.carImage} />
        <svg className={css.heartIcon} width={16} height={15}>
          <use xlinkHref={`${sprite}#icon-heart-white`} />
        </svg>
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
          {shortAddress} | {rentalCompany} |
        </p>
        <p className={css.details}>
          {type} | {formattedMileage} km
        </p>
      </div>
      <Link to={`${id}`} className={css.link}>
        Read more
      </Link>
    </>
  );
};

export default CarCard;
