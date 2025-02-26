import { formatMileage, getShortAddress, shortenId } from '../../utils/utils';
import css from './CarDetails.module.css';

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
    <section>
      <img src={img} alt={model} className={css.carImage} />
      <div className={css.details}>
        <h2>
          {brand} {model}, {year}
        </h2>
        <p>Id: {shortenId(id)}</p>
      </div>
      <div className={css.details}>
        <p className={css.location}>
          {getShortAddress(address)} Mileage: {formatMileage(mileage)} km
        </p>
        <p className={css.price}>${rentalPrice}</p>
        <p>{description}</p>

        <h3>Rental Conditions:</h3>
        <ul>
          {rentalConditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>

        <h3>Car Specifications:</h3>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
        <p>Fuel Consumption: {fuelConsumption}</p>
        <p>Engine Size: {engineSize}</p>

        <h3>Accessories and Functionalities:</h3>
        <ul>
          {allFeatures.map((feature, index) => (
            <li key={`feature-${index}`}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CarDetails;
