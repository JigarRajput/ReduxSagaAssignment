import {publicInstance} from '../configs';

export const searchProducts = async text => {
  const res = publicInstance.get('v1/products', {
    params: {
      query: text,
    },
  });

  return res;
};
