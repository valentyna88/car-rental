import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalog" className={css.button}>
          View Catalog
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
