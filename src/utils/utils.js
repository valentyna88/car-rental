export const getShortAddress = address => {
  const addressParts = address.split(',');
  return addressParts.slice(-2).join(' | ');
};

export const formatMileage = mileage => {
  return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
