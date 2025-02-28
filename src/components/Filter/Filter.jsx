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
            <label>
              Car brand
              <Field as="select" name="brand" className={css.select}>
                <option value="">Choose a brand</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Field>
            </label>
          </div>

          <div className={css.formGroup}>
            <label>
              Price/ 1 hour
              <Field as="select" name="price" className={css.select}>
                <option value="">Choose a price</option>
                <option value="0-50">0 - 50</option>
                <option value="50-100">50 - 100</option>
                <option value="100-200">100 - 200</option>
              </Field>
            </label>
          </div>
          <div className={css.formGroup}>
            <label>
              Car mileage / km
              <Field
                type="number"
                name="mileageFrom"
                placeholder="From"
                className={css.input}
              />
            </label>
            <Field
              type="number"
              name="mileageTo"
              placeholder="To"
              className={css.input}
            />
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
