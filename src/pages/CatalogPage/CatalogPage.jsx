import CarList from '../../components/CarList/CarList';
import Filter from '../../components/Filter/Filter';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={css.catalog}>
      <Filter />
      <CarList />
      <div className={css.btnWrapper}>
        <LoadMoreBtn />
      </div>
    </section>
  );
};

export default CatalogPage;
