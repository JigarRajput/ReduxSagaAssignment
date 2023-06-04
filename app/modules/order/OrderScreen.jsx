import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import orderScreenStyles from './OrderStyles';
import { images } from '../../assets';
import { strings } from '../../constants';
import { useSelector } from 'react-redux';

const OrderScreen = () => {

  const orderDetails = useSelector(state => state.order.orderDetails);

  return (
    <View style={orderScreenStyles.mainContainer}>
      <View style={orderScreenStyles.detailsTextContainer}>
        <Text style={orderScreenStyles.orderDetailsText}>
          {strings.orderDetails}
        </Text>
        <View style={orderScreenStyles.greenCheckTextContainer}>
          <Image
            style={orderScreenStyles.greenCheck}
            source={images.greenCheck}
          />
          <Text style={orderScreenStyles.orderSuccessText}>
            {strings.orderSuccessFull}
          </Text>
        </View>
      </View>
      <View style={orderScreenStyles.totalQuantityContainer}>
        <View style={orderScreenStyles.totalItem}>
          <Text style={orderScreenStyles.quantityText}>
            {strings.orderId}
          </Text>
          <Text style={orderScreenStyles.quantityTextValue}>
            {orderDetails?.id}
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
      </View>
      <View style={orderScreenStyles.totalQuantityContainer}>
        <Text style={orderScreenStyles.orderSummaryText}>
          {strings.orderSummary}
        </Text>
        <View style={orderScreenStyles.totalItem}>
          <Text style={orderScreenStyles.quantityText}>
            {strings.subTotalLabel}
          </Text>
          <Text style={orderScreenStyles.quantityTextValue}>
            {orderDetails?.order?.subtotal?.formatted_with_symbol}
          </Text>
        </View>
        <View style={orderScreenStyles.totalItem}>
          <Text style={orderScreenStyles.quantityText}>
            {strings.shippingFee}
          </Text>
          <Text style={orderScreenStyles.quantityTextValue}>
          {strings.shippingFeeValue}
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
      <TouchableOpacity style={orderScreenStyles.promoCodeBtn}>
        <Text style={orderScreenStyles.promoCodeText}>
          {strings.addPromoText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default OrderScreen