import {View, TouchableOpacity, SafeAreaView, Text} from 'react-native';
import customHeaderStyles from './CustomHeaderStyles';
import {ShoppingCartSimple, MagnifyingGlass} from 'phosphor-react-native';
import {moderateScale} from '../../theme';
import {strings} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setCart} from '../../redux/slices';

const CustomHeader = ({navigation, options, route}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    if (Object.keys(cart).length === 0) {
      dispatch(setCart(user.cart));
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={customHeaderStyles.container}>
        <View>
          <Text style={customHeaderStyles.headerText}>{strings.lemaans}</Text>
        </View>
        <View style={customHeaderStyles.rightContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(strings.navigationRoutes.SearchScreen);
            }}>
            <MagnifyingGlass size={32} weight="bold" />
          </TouchableOpacity>
          <TouchableOpacity
            style={customHeaderStyles.cart}
            onPress={() => {
              navigation.navigate(strings.navigationRoutes.CartScreen);
            }}>
            <ShoppingCartSimple size={moderateScale(30)} weight="bold" />
            <View style={customHeaderStyles.cartBadgeContainer}>
              <Text style={customHeaderStyles.cartBadge}>
                {cart.total_items}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
