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

// export const buildParams = filters => {
//   // const params = {};
//   // if (filters.brand) params.brand = filters.brand;
//   // if (filters.rentalPrice) params.rentalPrice = filters.rentalPrice;
//   // if (filters.mileageFrom) params.minMileage = filters.mileageFrom;
//   // if (filters.mileageTo) params.maxMileage = filters.mileageTo;

//   const params = new URLSearchParams({
//     page: page.toString(),
//     limit: '12',
//   });

//   const { brand, rentalPrice, mileageFrom, mileageTo } = filters;

//   if (location) {
//     params.append('location', formatLocation(location));
//   }

//   if (transmission) {
//     params.append('transmission', transmission);
//   }

//   ['AC', 'kitchen', 'TV', 'bathroom'].forEach(equipment => {
//     if (truckEquipment.includes(equipment)) {
//       params.append(equipment, 'true');
//     }
//   });

//   if (form) {
//     const formType = form === 'van' ? 'panelTruck' : form;
//     params.append('form', formType);
//   }

//   return params;
// };

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
