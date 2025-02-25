import CarList from '../../components/CarList/CarList';
import Filter from '../../components/Filter/Filter';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={css.catalog}>
      <Filter />
      <CarList />
    </section>
  );
};

export default CatalogPage;
