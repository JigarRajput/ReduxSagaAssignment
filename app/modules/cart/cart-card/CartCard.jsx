import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Star, XCircle,Minus, Plus } from 'phosphor-react-native';
import cartCardStyles from './CardStyles';
import { moderateScale, colors } from '../../../theme';

const CartCard = ({product}) => {
  return (
    <View style={cartCardStyles.mainContainerCartCard}>
      <View style={cartCardStyles.leftImgContainerCartCard}>
        <Image
          resizeMode="stretch"
          source={{uri: product?.image?.url}}
          style={cartCardStyles.leftImgCartCard}
        />
      </View>
      <View style={cartCardStyles.rightContainerCartCard}>
        <Text numberOfLines={2} style={cartCardStyles.productTitle}>
          {product?.name}
        </Text>
        <View style={cartCardStyles.priceDiscountContainer}>
          <Text style={cartCardStyles.priceText}>$ {product?.price?.raw}</Text>
          <Text style={cartCardStyles.discountText}>
            ${'10'}
          </Text>
        </View>
        <View style={cartCardStyles.btnCountContainerMain}>
          <View style={cartCardStyles.btnCountContainer}>
            <TouchableOpacity
              style={cartCardStyles.btnCount}
              onPress={()=>{}}>
              <Minus size={moderateScale(15)} weight="bold" />
            </TouchableOpacity>
            <Text style={cartCardStyles.countValue}>{product?.quantity}</Text>
            <TouchableOpacity
              style={cartCardStyles.btnCount}
              onPress={()=>{}}>
              <Plus size={moderateScale(15)} weight="bold" />
            </TouchableOpacity>
          </View>
          <View style={cartCardStyles.ratingContainer}>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => { }}
        style={cartCardStyles.removeBtn}>
        <XCircle size={moderateScale(25)} weight="bold" />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;
