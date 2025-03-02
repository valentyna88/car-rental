import { useDispatch, useSelector } from 'react-redux';
import CarList from '../../components/CarList/CarList';
import Filter from '../../components/Filter/Filter';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './CatalogPage.module.css';
import { useEffect, useState } from 'react';
import { fetchAllCars } from '../../redux/cars/operations';
// import { clearCars } from '../../redux/cars/slice';
import { selectCars, selectIsLoading } from '../../redux/cars/selectors';
import { selectFilters } from '../../redux/filters/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const totalCars = useSelector(state => state.cars.totalCars);
  // const currentPage = useSelector(state => state.cars.currentPage);
  const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = useSelector(state => state.cars.totalPages);

  useEffect(() => {
    setCurrentPage(1);
    dispatch(fetchAllCars({ page: 1, filters, reset: true }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(
      fetchAllCars({
        page: currentPage + 1,
        filters,
        reset: false,
      })
    );
    setCurrentPage(prev => prev + 1);
  };

  return (
    <section className={css.catalog}>
      <Filter />
      <CarList />
      {isLoading && <p>Loading...</p>}
      <div className={css.btnWrapper}>
        {cars.length < totalCars && !isLoading && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
