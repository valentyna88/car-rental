export const getShortAddress = address => {
  const addressParts = address.split(',');
  return addressParts.slice(-2).join(', ');
};

export const formatDistance = mileage => {
  return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const formatMileage = value =>
  value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';

export const handleMileageChange = (e, setFieldValue, fieldName) => {
  setFieldValue(fieldName, e.target.value.replace(/\D/g, ''));
};

export const shortenId = (id, length = 4) => {
  return id.slice(0, length);
};

export const buildParams = (page, filters) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: '12',
  });

  const { brand, rentalPrice, mileageFrom, mileageTo } = filters;

  if (brand) {
    params.append('brand', brand);
  }
  if (rentalPrice) {
    params.append('rentalPrice', rentalPrice.toString());
  }
  if (mileageFrom) {
    params.append('minMileage', mileageFrom);
  }
  if (mileageTo) {
    params.append('maxMileage', mileageTo);
  }

  return params;
};
