import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {CartCard} from '../cart-card';
import cartStyles from './CartStyles';
import {strings} from '../../../constants';
import useCart from './useCart';
import {CustomLoader} from '../../../components';
import {EmptyComponent} from '../../../components';
import { images } from '../../../assets';
import { colors } from '../../../theme';

const CartScreen = () => {
  const {order, handleCheckOut, cartItems, subtotal, isDisabled} = useCart();
  if (cartItems.length !== 0)
    return (
      <View style={cartStyles.productsContainer}>
        <View style={cartStyles.summaryContainer}>
          <View style={cartStyles.subtotalContainer}>
            <Text style={cartStyles.subtotalText}>{strings.subTotalLabel}</Text>
            <Text style={cartStyles.subtotalValue}>
              {subtotal?.formatted_with_symbol}
            </Text>
          </View>
          <TouchableOpacity
            disabled={isDisabled}
            onPress={handleCheckOut}
            style={cartStyles.checkOutBtn}>
            {!order?.isLoading ? (
              <Text style={cartStyles.checkOutBtnText}>
                {strings.proceedToCheckout}
              </Text>
            ) : (
              <CustomLoader
                size={strings.loaderSizes.small}
                color={colors.black}
                animating={order.isLoading}
              />
            )}
          </TouchableOpacity>
        </View>
        <FlatList
          bounces={false}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          data={cartItems}
          renderItem={({item, index}) => <CartCard product={item} />}
        />
      </View>
    );
  else return <EmptyComponent image={images.emptyCart} />;
};

export default CartScreen;
