import { useParams } from 'react-router-dom';
import CarDetails from '../../components/CarDetails/CarDetails';
import { useDispatch, useSelector } from 'react-redux';
import BookingForm from '../../components/BookingForm/BookingForm';
import {
  selectCarDetails,
  selectError,
  selectIsLoading,
} from '../../redux/cars/selectors';
import { useEffect } from 'react';
import { fetchCarById } from '../../redux/cars/operations';

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
    <>
      <CarDetails car={car} />
      <BookingForm />
    </>
  );
};

export default CarDetailsPage;
