import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllCars } from '../../redux/cars/operations';
import { selectCars, selectIsLoading } from '../../redux/cars/selectors';
import { selectFilters } from '../../redux/filters/selectors';
import CarList from '../../components/CarList/CarList';
import Filter from '../../components/Filter/Filter';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './CatalogPage.module.css';
import { ClipLoader } from 'react-spinners';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const totalCars = useSelector(state => state.cars.totalCars);
  const [currentPage, setCurrentPage] = useState(1);

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
      {isLoading && (
        <div className={css.loaderWrapper}>
          <ClipLoader color="#3470ff" loading={isLoading} size={50} />
        </div>
      )}
      <div className={css.btnWrapper}>
        {cars.length < totalCars && !isLoading && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
