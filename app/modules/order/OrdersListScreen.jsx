import {View, FlatList, Text} from 'react-native';
import OrderDetailCard from './OrderDetailCard';
import orderScreenStyles from './OrderStyles';
import {strings} from '../../constants';
import useOrder from './useOrder';
import {CustomLoader, EmptyComponent} from '../../components';
import {images} from '../../assets';
import {colors} from '../../theme';

const OrdersListScreen = () => {
  const {orders} = useOrder();

  if (!orders?.isLoading && orders?.ordersList?.length === 0) {
    return <EmptyComponent image={images.noOrders} />;
  } else if (orders?.isLoading) {
    <CustomLoader
      animating={orders?.isLoading}
      size={strings.loaderSizes.large}
      color={colors.black}
    />;
  } else {
    return (
      <View style={orderScreenStyles.orderListContainer}>
        <Text style={orderScreenStyles.yourOrdersText}>
          {strings.yourOrders}
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={orders?.ordersList}
          keyExtractor={(item, index) => item?.id}
          renderItem={({item, index}) => (
            <OrderDetailCard orderDetails={item} />
          )}
        />
      </View>
    );
  }
};

export default OrdersListScreen;
