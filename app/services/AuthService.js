import { privateInstance } from '../configs';

export const getLoginStats = async arg => {
  const res = await privateInstance.get('v1/customers', {
    params: {query: arg.email},
  });
  return res;
};

export const signUpService = async arg => {
  // first create cart for this new user
  const cartRes = await privateInstance.get('v1/carts');
  const cart = cartRes.data;
  // send cart details with signup in metadata
  const res = await privateInstance.post('v1/customers', {
    email: arg.email,
    firstname: arg.firstname,
    lastname: arg.lastname,
    meta: {
      cart: cart,
      password: arg.password,
    },
  });

  return res;
};

export const updateUserService = async arg => {
  // new cart for user
  const cartRes = await privateInstance.get('v1/carts');
  const cart = cartRes.data;

  const res = await privateInstance.put(`v1/customers/${arg.id}`, {
    meta: {
      ...arg.meta,
      cart,
    },
  });

  return res;
};
