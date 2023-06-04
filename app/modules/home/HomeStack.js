import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {strings} from '../../constants';
import {SearchScreen} from '../search';
import {DetailsScreen} from '../detail';
import HomeScreen from './HomeScreen';
import CustomHeader from '../../components/custom-header/CustomHeaderHome';
import {CartScreen} from '../cart';
import {OrderScreen} from '../order';
import {CustomHeaderWithBack} from '../../components';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: ({navigation, route, options}) => (
            <CustomHeader
              navigation={navigation}
              route={route}
              options={options}
            />
          ),
        }}
        name={strings.navigationRoutes.HomeScreen}
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          header: ({navigation, route, options}) => (
            <CustomHeaderWithBack
              navigation={navigation}
              route={route}
              options={options}
              title={strings.searchProducts}
            />
          ),
        }}
        name={strings.navigationRoutes.SearchScreen}
        component={SearchScreen}
      />

      <Stack.Screen
        options={{
          header: ({navigation, route, options}) => (
            <CustomHeaderWithBack
              navigation={navigation}
              route={route}
              options={options}
              title={strings.yourCartLabel}
            />
          ),
        }}
        name={strings.navigationRoutes.CartScreen}
        component={CartScreen}
      />

      <Stack.Screen
        options={{
          header: ({navigation, route, options}) => (
            <CustomHeaderWithBack
              navigation={navigation}
              route={route}
              options={options}
              title={strings.productDetailsHeader}
            />
          ),
        }}
        name={strings.navigationRoutes.ProductDetailsScreen}
        component={DetailsScreen}
      />

      <Stack.Screen
        options={{
          header: ({navigation, route, options}) => (
            <CustomHeaderWithBack
              navigation={navigation}
              route={route}
              options={options}
              title={strings.orderSummary}
            />
          ),
        }}
        name={strings.navigationRoutes.OrderDetailsScreen}
        component={OrderScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
