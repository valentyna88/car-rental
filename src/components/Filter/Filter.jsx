import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setFilters } from '../../redux/filters/slice.js';
import { fetchAllCars, fetchBrands } from '../../redux/cars/operations';
import { selectBrands, selectCars } from '../../redux/cars/selectors.js';
import { validationSchema } from '../../utils/validation.js';
import sprite from '../../assets/icons/sprite.svg';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const cars = useSelector(selectCars);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const initialValues = {
    brand: '',
    rentalPrice: '',
    mileageFrom: '',
    mileageTo: '',
  };

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSubmit = values => {
    const newFilters = {
      brand: selectedBrand || values.brand,
      rentalPrice: selectedPrice || values.rentalPrice,
      mileageFrom: values.mileageFrom ? Number(values.mileageFrom) : '',
      mileageTo: values.mileageTo ? Number(values.mileageTo) : '',
    };

    dispatch(setFilters(newFilters));
    dispatch(fetchAllCars({ page: 1, filters: newFilters, reset: true }));
  };

  const uniquePrices = [...new Set(cars.map(car => car.rentalPrice))].sort(
    (a, b) => a - b
  );

  const handleBrandSelect = (brand, setFieldValue) => {
    setSelectedBrand(brand);
    setFieldValue('brand', brand);
    setShowBrandDropdown(false);
  };

  const handlePriceSelect = (price, setFieldValue) => {
    setSelectedPrice(price);
    setFieldValue('rentalPrice', price);
    setShowPriceDropdown(false);
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.form} autoComplete="off">
            <div className={css.formGroup}>
              <label htmlFor="brand" className={css.label}>
                Car brand
              </label>

              <div
                className={css.customSelect}
                onClick={() => setShowBrandDropdown(!showBrandDropdown)}
              >
                <div className={css.selectedOption}>
                  {selectedBrand || values.brand || 'Choose a brand'}
                </div>
                <div className={css.icon}>
                  <svg className={css.iconChevron}>
                    <use
                      xlinkHref={`${sprite}#icon-chevron-${
                        showBrandDropdown ? 'up' : 'down'
                      }`}
                    />
                  </svg>
                </div>
                {showBrandDropdown && (
                  <div className={css.dropdown}>
                    {brands.map(brand => (
                      <div
                        key={brand}
                        className={css.option}
                        onClick={() => handleBrandSelect(brand, setFieldValue)}
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={css.formGroup}>
              <label htmlFor="price" className={css.label}>
                Price / 1 hour
              </label>
              <div
                className={css.customSelect}
                onClick={() => setShowPriceDropdown(!showPriceDropdown)}
              >
                <div className={css.selectedOption}>
                  {selectedPrice
                    ? `To $${selectedPrice}`
                    : values.rentalPrice
                    ? `To $${values.rentalPrice}`
                    : 'Choose a price'}
                </div>
                <div className={css.icon}>
                  <svg className={css.iconChevron}>
                    <use
                      xlinkHref={`${sprite}#icon-chevron-${
                        showPriceDropdown ? 'up' : 'down'
                      }`}
                    />
                  </svg>
                </div>
                {showPriceDropdown && (
                  <div className={css.dropdown}>
                    {uniquePrices.map(price => (
                      <div
                        key={price}
                        className={css.option}
                        onClick={() => handlePriceSelect(price, setFieldValue)}
                      >
                        To ${price}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={css.formGroup}>
              <label className={css.label}>Car mileage / km</label>
              <div className={css.selectWrapper}>
                <div className={css.inputContainer}>
                  <label className={css.inputLabel}>From</label>
                  <Field
                    type="text"
                    name="mileageFrom"
                    className={`${css.select} ${css.selectFrom}`}
                  />
                </div>
                <div className={css.inputContainer}>
                  <label className={css.inputLabel}>To</label>
                  <Field
                    type="text"
                    name="mileageTo"
                    className={`${css.select} ${css.selectTo}`}
                  />
                </div>
              </div>
            </div>

            <button className={css.searchBtn} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Filter;
