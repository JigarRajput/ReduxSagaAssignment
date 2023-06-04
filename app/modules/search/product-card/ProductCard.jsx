import {useNavigation} from '@react-navigation/native';
import {Star} from 'phosphor-react-native';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {strings} from '../../../constants';
import {colors, moderateScale} from '../../../theme';
import productCardStyles from './ProductCardStyles';

const ProductCard = ({product}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(strings.navigationRoutes.ProductDetailsScreen, {
          product,
        })
      }
      style={productCardStyles.mainContainer}>
      <View style={productCardStyles.leftImageContainer}>
        <Image
          resizeMode='contain'
          style={productCardStyles.productImgStyles}
          source={{uri: product?.image?.url}}
        />
      </View>
      <View style={productCardStyles.rightContainer}>
        <Text numberOfLines={2} style={productCardStyles.description}>
          {product?.name}
        </Text>
        <View style={productCardStyles.priceDiscountContainer}>
          <Text style={productCardStyles.price}>{product?.price?.formatted_with_symbol}</Text>
        </View>
          <Text style={productCardStyles.categoryText}>{product?.categories[0]?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
