import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          <svg className={css.icon}>
            <use href="/src/assets/icons/symbol-defs.svg#icon-logo"></use>
          </svg>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
