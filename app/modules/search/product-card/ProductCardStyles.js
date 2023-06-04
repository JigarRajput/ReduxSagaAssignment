import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const productCardStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(10),
    paddingEnd: moderateScale(10),
    backgroundColor: colors.white,
    marginVertical: verticalScale(10),
    borderBottomColor: colors.grey,
    borderBottomWidth: (0.4)
  },
  leftImageContainer: {
    padding: moderateScale(10),
    width: '40%',
    marginEnd: horizontalScale(15),
  },
  rightContainer: {
    paddingVertical: moderateScale(10),
    paddingEnd: horizontalScale(10),
    width: '60%',
  },
  productImgStyles: {
    width: horizontalScale(120),
    height: verticalScale(100)
  },
  description: {
    fontSize: moderateScale(15),
    marginBottom: verticalScale(10),
  },
  categoryText: {
    fontSize: moderateScale(12),
    color: colors.grey
  },
  price: {
    marginBottom: verticalScale(10),
    fontSize: moderateScale(16),
    fontWeight: '700',
    color:colors.green
  },
  priceDiscountContainer: {
    flexDirection: 'row',
    columnGap: horizontalScale(15),
  },
  discount: {
    color: colors.green,
  },
  ratingContainer: {
    marginVertical: verticalScale(15),
    flexDirection: 'row',
    columnGap: horizontalScale(8),
  },
});

export default productCardStyles;
