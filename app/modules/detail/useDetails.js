import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {addToCart, checkOutThunk} from '../../redux/thunks';
import {strings} from '../../constants';
import {
  addToCartPending,
  checkOutPending,
  toggleOrderSuccess,
} from '../../redux';

const useDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector(state => state.cart);
  const {userId: customerId, details: userDetails} = useSelector(
    state => state.auth,
  );
  const order = useSelector(state => state.order);
  const product = route.params?.product;
  const dispatch = useDispatch();
  const [isCheckOutDisabled, setIsCheckOutDisabled] = useState(false);

  useEffect(() => {
    if (order.orderSuccess) {
      dispatch(toggleOrderSuccess());
      navigation.navigate(strings.navigationRoutes.OrderDetailsScreen);
      setIsCheckOutDisabled(false);
    }
  }, [order.orderSuccess]);

  const handleAddToCart = () => {
    dispatch(addToCartPending({cartId: cart.cart.id, productId: product.id}));
  };

  const handleCheckOut = () => {
    setIsCheckOutDisabled(true);
    dispatch(
      checkOutPending({id: product.id, type: 'product_id', userDetails}),
    );
  };

  return {
    product,
    handleAddToCart,
    handleCheckOut,
    isCheckOutDisabled,
    order,
    cart,
  };
};

export default useDetails;
