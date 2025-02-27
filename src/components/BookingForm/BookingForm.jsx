import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './BookingForm.module.css';

import * as Yup from 'yup';

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required('Name is required')
      .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces')
      .min(3, 'Name is too short')
      .max(50, 'Name is too long'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    bookingDate: Yup.date()
      .required('Booking date is required')
      .min(new Date(), 'Select only future date'),
    comment: Yup.string().trim().max(500, 'Comment is too long'),
  });

  const handleSubmit = (values, actions) => {
    console.log('Form Values:', values);
    actions.resetForm();
  };

  return (
    <section>
      <h4 className={css.title}>Book your car now</h4>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form} autoComplete="off">
            <Field type="text" name="name" placeholder="Name*" />
            <ErrorMessage name="name" component="span" />

            <Field type="email" name="email" placeholder="Email*" />
            <ErrorMessage name="email" component="span" />

            <Field type="date" name="bookingDate" placeholder="Booking date" />
            <ErrorMessage name="bookingDate" component="span" />

            <Field as="textarea" name="comment" placeholder="Comment" />

            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default BookingForm;
