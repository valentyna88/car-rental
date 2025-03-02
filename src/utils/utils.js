export const getShortAddress = address => {
  const addressParts = address.split(',');
  return addressParts.slice(-2).join(', ');
};

export const formatMileage = mileage => {
  return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const shortenId = (id, length = 4) => {
  return id.slice(0, length);
};

export const buildParams = filters => {
  const params = {};
  if (filters.brand) params.brand = filters.brand;
  if (filters.rentalPrice) params.rentalPrice = filters.rentalPrice;
  if (filters.mileageFrom) params.minMileage = filters.mileageFrom;
  if (filters.mileageTo) params.maxMileage = filters.mileageTo;
  return params;
};
