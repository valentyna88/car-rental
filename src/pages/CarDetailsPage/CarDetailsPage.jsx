import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../../redux/cars/operations';
import {
  selectCarDetails,
  selectError,
  selectIsLoading,
} from '../../redux/cars/selectors';
import CarDetails from '../../components/CarDetails/CarDetails';
import BookingForm from '../../components/BookingForm/BookingForm';
import css from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarDetails);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCarById(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!car) return <p>Car not found</p>;

  return (
    <section className={css.carDetails}>
      <div className={css.formContainer}>
        <img src={car.img} alt={car.model} className={css.carImage} />
        <BookingForm />
      </div>
      <CarDetails car={car} />
    </section>
  );
};

export default CarDetailsPage;
