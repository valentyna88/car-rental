import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import sprite from '../../assets/icons/sprite.svg';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link to="/" className={css.logo}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-logo`}></use>
          </svg>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
