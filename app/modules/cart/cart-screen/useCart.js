import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {checkOutThunk} from '../../../redux/thunks';
import {useDispatch, useSelector} from 'react-redux';
import {checkOutPending, toggleOrderSuccess} from '../../../redux';
import {strings} from '../../../constants';

const useCart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const subtotal = useSelector(state => state.cart.subtotal);
  const cartItems = useSelector(state => state.cart.cart.line_items);
  const cartId = useSelector(state => state.cart.cart.id);
  const userDetails = useSelector(state => state.auth.details);
  const order = useSelector(state => state.order);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (order.orderSuccess) {
      setIsDisabled(false);
      dispatch(toggleOrderSuccess());
      navigation.navigate(strings.navigationRoutes.OrderDetailsScreen);
    }
  }, [order.orderSuccess]);

  const handleCheckOut = () => {
    setIsDisabled(true);
    dispatch(checkOutPending({id: cartId, type: 'cart', userDetails}));
  };

  return {
    order,
    handleCheckOut,
    cartItems,
    subtotal,
    isDisabled,
  };
};

export default useCart;
