import { Link } from 'react-router-dom';
import css from './CarCard.module.css';

const CarCard = ({ car }) => {
  const { id, year, brand, type, img, model, address, rentalPrice, mileage } =
    car;
  return (
    <div className={css.card}>
      <img src={img} alt={model} className={css.carImage} />
      <div className={css.info}>
        <div className={css.titleBox}>
          <h3>{brand}</h3>
          <p>
            {model}, {year}
          </p>
        </div>
        <p className={css.price}>${rentalPrice}</p>
        <p className={css.location}>{address}</p>
        <p className={css.mileage}>{mileage} km</p>
        <p className={css.type}>{type}</p>
      </div>
      <Link to={`${id}`} className={css.link}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
