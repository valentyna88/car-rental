import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';

const CarList = () => {
  const cars = useSelector(selectCars);

  return (
    <ul className={css.carList}>
      {cars.map(car => (
        <li key={car.id} className={css.carItem}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarList;
