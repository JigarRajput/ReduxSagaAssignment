import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {strings} from '../../constants';
import {CartScreen} from './cart-screen';
import {OrderScreen} from '../order';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
      <Stack.Navigator>
          
      <Stack.Screen
        name={strings.navigationRoutes.CartScreen}
        component={CartScreen}
          />
          
      <Stack.Screen
        name={strings.navigationRoutes.OrderDetailsScreen}
        component={OrderScreen}
          />
          
    </Stack.Navigator>
  );
};

export default CartStack;