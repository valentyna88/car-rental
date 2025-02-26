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
