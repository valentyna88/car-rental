import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../../redux/cars/operations';
import css from './CarList.module.css';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from '../../redux/cars/selectors';

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading cars...</p>;
  }

  if (error) {
    return <p>Error loading cars: {error}</p>;
  }

  if (!Array.isArray(cars)) {
    return <p>No cars available</p>;
  }

  return (
    <ul className={css.carList}>
      {cars.map(car => (
        <li key={car.id} className={css.carItem}>
          <img src={car.img} alt={car.model} className={css.carImage} />
          <h3>{car.img}</h3>
          <p>{car.model}</p>
          <p>{car.price} EUR/day</p>
        </li>
      ))}
    </ul>
  );
};

export default CarList;
