import {useSelector, useDispatch} from 'react-redux';
import {getOrders} from '../../redux/thunks';
import {useEffect} from 'react';
import {getOrdersPending} from '../../redux';

const useOrder = () => {
  const userDetails = useSelector(state => state.auth.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersPending(userDetails));
  }, []);

  const orders = useSelector(state => state.order);

  return {
    orders,
  };
};

export default useOrder;
