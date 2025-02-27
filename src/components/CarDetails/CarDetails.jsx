import { formatMileage, getShortAddress, shortenId } from '../../utils/utils';
import sprite from '../../assets/icons/sprite.svg';
import css from './CarDetails.module.css';
import BookingForm from '../BookingForm/BookingForm';

const CarDetails = ({ car }) => {
  const {
    id,
    year,
    type,
    brand,
    img,
    model,
    address,
    rentalPrice,
    mileage,
    rentalConditions,
    description,
    accessories,
    fuelConsumption,
    engineSize,
    functionalities,
  } = car;

  const allFeatures = [...accessories, ...functionalities];

  return (
    <section className={css.carDetails}>
      <div className={css.formContainer}>
        <img src={img} alt={model} className={css.carImage} />
        <BookingForm />
      </div>
      <div className={css.details}>
        <div className={css.mainDetails}>
          <div className={css.titleContainer}>
            <h2 className={css.title}>
              {brand} {model}, {year}
            </h2>
            <p className={css.id}>Id: {shortenId(id)}</p>
          </div>
          <div className={css.locationMileageContainer}>
            <div className={css.locationContainer}>
              <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-location`}></use>
              </svg>
              <span>{getShortAddress(address)}</span>
            </div>
            <p>Mileage: {formatMileage(mileage)} km</p>
          </div>
          <p className={css.price}>${rentalPrice}</p>
          <p className={css.description}>{description}</p>
        </div>

        <div className={css.detailsSection}>
          <div className={css.conditions}>
            <h3 className={css.listTitle}>Rental Conditions:</h3>
            <ul>
              {rentalConditions.map((condition, index) => (
                <li className={css.detailsItem} key={index}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#icon-check-circle`}></use>
                  </svg>
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          <div className={css.specifications}>
            <h3 className={css.listTitle}>Car Specifications:</h3>
            <ul>
              <li className={css.detailsItem}>
                <svg className={css.icon}>
                  <use xlinkHref={`${sprite}#icon-calendar`}></use>
                </svg>
                Year: {year}
              </li>
              <li className={css.detailsItem}>
                <svg className={css.icon}>
                  <use xlinkHref={`${sprite}#icon-car`}></use>
                </svg>
                Type: {type}
              </li>
              <li className={css.detailsItem}>
                <svg className={css.icon}>
                  <use xlinkHref={`${sprite}#icon-fuel-pump`}></use>
                </svg>
                Fuel Consumption: {fuelConsumption}
              </li>
              <li className={css.detailsItem}>
                <svg className={css.icon}>
                  <use xlinkHref={`${sprite}#icon-gear`}></use>
                </svg>
                Engine Size: {engineSize}
              </li>
            </ul>
          </div>

          <div className={css.features}>
            <h3 className={css.listTitle}>Accessories and Functionalities:</h3>
            <ul>
              {allFeatures.map((feature, index) => (
                <li className={css.detailsItem} key={`feature-${index}`}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#icon-check-circle`}></use>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
