import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
      .nullable()
      .required('Booking date is required')
      .min(new Date(), 'Select only future date'),
    comment: Yup.string().trim().max(500, 'Comment is too long'),
  });

  const mockPostRequest = values => {
    return new Promise(resolve => {
      console.log('Submitted values:', values);
      setTimeout(() => {
        resolve({ data: 'Success' });
      }, 1000);
    });
  };

  const handleSubmit = async (values, actions) => {
    try {
      await mockPostRequest(values);
      toast.success('Booking successful!');
      actions.resetForm();
    } catch {
      toast.error('Booking error!');
    }
  };

  return (
    <section className={css.formSection}>
      <h4 className={css.title}>Book your car now</h4>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className={css.form} autoComplete="off">
            <Field
              className={`${css.field} ${
                errors.name && touched.name ? css.fieldError : ''
              }`}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
            <Field
              className={`${css.field} ${
                errors.email && touched.email ? css.fieldError : ''
              }`}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.errorMessage}
            />
            <DatePicker
              selected={values.bookingDate}
              onChange={date => setFieldValue('bookingDate', date)}
              placeholderText="Booking date"
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              className={`${css.field} ${
                errors.bookingDate && touched.bookingDate ? css.fieldError : ''
              }`}
            />
            <ErrorMessage
              name="bookingDate"
              component="span"
              className={css.errorMessage}
            />
            <Field
              className={`${css.field} ${css.lastField}`}
              as="textarea"
              name="comment"
              placeholder="Comment"
              style={{ resize: 'none' }}
            />
            <button
              className={css.formBtn}
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default BookingForm;
