import {publicInstance} from '../configs';

export const getProducts = async () => {
  const res = await publicInstance.get('v1/products');
  return res;
};

export const getCategories = async () => {
  const res = await publicInstance.get('v1/categories');
  return res;
};
