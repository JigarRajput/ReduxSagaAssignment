import {publicInstance, privateInstance} from '../configs';

export const addToCartService = async (endpoint, arg) => {
  const res = await publicInstance.post(endpoint, {
    id: arg.productId,
  });
  return res;
};

export const getCheckOutId = async (id, type) => {
  const res = await privateInstance.get(`v1/checkouts/${id}`, {
    params: {
      type,
    },
  });
  return res;
};

export const getOrder = async (checkOutId, arg) => {
  const res = await privateInstance.post(`v1/checkouts/${checkOutId}`, {
    customer: {
      id: arg.userDetails.id,
    },
    payment: {
      gateway: 'test_gateway',
      card: {
        number: '4242 4242 4242 4242',
        expiry_month: 12,
        expiry_year: 2031,
        cvc: 890,
        postal_zip_code: '01903',
      },
    },
  });
  return res;
};
