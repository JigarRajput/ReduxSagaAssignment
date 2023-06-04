import {privateInstance} from '../configs';

export const getOrdersOfCustomer = async arg => {
  const res = privateInstance.get(`v1/customers/${arg.id}/orders`);
  return res;
};
