import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  brand: Yup.string().optional(),
  rentalPrice: Yup.number().positive().integer().optional(),
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

export const BookingSchema = Yup.object().shape({
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
