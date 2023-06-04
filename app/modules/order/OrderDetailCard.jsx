import {View, Text} from 'react-native';
import {strings} from '../../constants';
import orderScreenStyles from './OrderStyles';

const OrderDetailCard = ({orderDetails}) => {
  return (
    <View style={orderScreenStyles.totalQuantityContainer}>
      <Text style={orderScreenStyles.orderSummaryText}>
        {strings.orderSummary}
      </Text>
      <View style={orderScreenStyles.totalItem}>
        <Text style={orderScreenStyles.quantityText}>{strings.orderId}</Text>
        <Text style={orderScreenStyles.quantityTextValue}>
          {orderDetails?.id}
        </Text>
      </View>
      <View style={orderScreenStyles.totalItem}>
        <Text style={orderScreenStyles.quantityText}>
          {strings.shippingFee}
        </Text>
        <Text style={orderScreenStyles.quantityTextValue}>
          {orderDetails?.order?.shipping?.price?.formatted_with_symbol}
        </Text>
      </View>
      <View style={orderScreenStyles.totalItem}>
        <Text style={orderScreenStyles.quantityText}>
          {strings.paymentStatus}
        </Text>
        <Text style={orderScreenStyles.quantityTextValue}>
          {orderDetails?.status_payment}
        </Text>
      </View>
      <View style={orderScreenStyles.totalItem}>
        <Text style={orderScreenStyles.quantityTextValue}>
          {strings.totalWithTax}
        </Text>
        <Text style={orderScreenStyles.quantityTextValue}>
          {orderDetails?.order?.total_with_tax?.formatted_with_symbol}
        </Text>
      </View>
    </View>
  );
};

export default OrderDetailCard;
