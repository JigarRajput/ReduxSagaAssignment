import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Star} from 'phosphor-react-native';
import detailsStyles from './DetailsStyles';
import {colors} from '../../theme';
import {strings} from '../../constants';
import useDetails from './useDetails';

const DetailsScreen = () => {
  const {
    product,
    cart,
    handleAddToCart,
    handleCheckOut,
    order,
    isCheckOutDisabled,
  } = useDetails();

  return (
    <ScrollView
      contentContainerStyle={detailsStyles.contentCantainer}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={detailsStyles.topCantainer}>
        <Image
          resizeMode="stretch"
          source={{uri: product?.image?.url}}
          style={detailsStyles.productImage}
        />
        <Text style={detailsStyles.productName}>{product?.title}</Text>
      </View>
      <View style={detailsStyles.bottomContainer}>
        <View style={detailsStyles.categoryRatingContainer}>
          <Text style={detailsStyles.productCategory}>{product?.category}</Text>
          <View style={detailsStyles.ratingContainer}>
            <Star size={30} color={colors.yellow} weight="fill" />
          </View>
        </View>
        <View style={detailsStyles.descContainer}>
          <Text style={detailsStyles.descTextLabel}>
            {strings.descriptionLabel}
          </Text>
          <Text style={detailsStyles.descTextValue}>
            {product?.description}
          </Text>
        </View>
        <View style={detailsStyles.priceAddCartContainer}>
          <Text style={detailsStyles.priceText}>
            {product?.price?.formatted_with_symbol}
          </Text>

          <TouchableOpacity
            style={detailsStyles.addCartBtn}
            onPress={() => handleAddToCart(product)}>
            {cart?.isLoading ? (
              <ActivityIndicator animating={cart.isLoading} size={'small'} />
            ) : (
              <Text style={detailsStyles.addCartText}>
                {strings.addToCartBtnText}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={isCheckOutDisabled}
            style={detailsStyles.addCartBtn}
            onPress={handleCheckOut}>
            {!order?.isLoading ? (
              <Text style={detailsStyles.addCartText}>Checkout</Text>
            ) : (
              <ActivityIndicator animating={order.isLoading} size={'small'} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
