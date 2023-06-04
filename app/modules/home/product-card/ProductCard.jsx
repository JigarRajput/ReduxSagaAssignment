import {Image, Text, TouchableOpacity, View} from 'react-native';
import {productStyles} from './ProductStyles';
import { strings } from '../../../constants';

const ProductCard = ({ product, navigation }) => {
  
  return (
    <TouchableOpacity
      style={productStyles.mainContainer}
          onPress={() => {navigation.push(strings.navigationRoutes.ProductDetailsScreen,{product: product})}}>
      <View style={productStyles.imgLikeContainer}>
        <Image
          resizeMode="stretch"
          source={{uri: product?.image?.url}}
          style={productStyles.productImg}
        />
      </View>
      <View style={productStyles.detailsContainer}>
        <Text style={productStyles.productNameText} numberOfLines={2}>
          {product?.name}
        </Text>
        <View style={productStyles.priceDiscountContainer}>
          <Text style={productStyles.priceText}>{product?.price?.formatted_with_symbol}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
