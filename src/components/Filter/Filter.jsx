import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './Filter.module.css';

const Filter = () => {
  const initialValues = {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  };

  const validationSchema = Yup.object().shape({
    brand: Yup.string().optional(),
    price: Yup.number().positive().integer().optional(),
    mileageFrom: Yup.number().positive().integer().optional(),
    mileageTo: Yup.number()
      .positive()
      .integer()
      .optional()
      .when('mileageFrom', (mileageFrom, schema) =>
        mileageFrom
          ? schema.min(mileageFrom, 'To must be greater than From')
          : schema
      ),
  });
  const brands = ['Toyota', 'Honda', 'BMW', 'Audi', 'Mercedes'];
  return (
    <section>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form className={css.form} autoComplete="off">
          <div className={css.formGroup}>
            <label htmlFor="brand" className={css.label}>
              Car brand
            </label>
            <Field as="select" name="brand" className={css.select}>
              <option value="">Choose a brand</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="price" className={css.label}>
              Price / 1 hour
            </label>
            <Field as="select" name="price" className={css.select}>
              <option value="">Choose a price</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </Field>
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
      </Formik>
    </section>
  );
};

export default Filter;
