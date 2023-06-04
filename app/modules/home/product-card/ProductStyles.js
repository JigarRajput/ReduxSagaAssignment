import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  colors,
} from '../../../theme';

export const productStyles = StyleSheet.create({
  mainContainer: {
    width: horizontalScale(160),
    marginHorizontal: horizontalScale(15),
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(4),
    backgroundColor: colors.themeColor,
    borderColor: colors.themeColor,
    marginVertical: verticalScale(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(2),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(3.84),
    elevation: verticalScale(5),
  },
  imgLikeContainer: {
    backgroundColor: colors.white,
    padding: moderateScale(8),
    borderRadius: moderateScale(8),
    margin: moderateScale(5),
    alignItems: 'center',
    borderColor: colors.themeColor,
  },
  productImg: {
    resizeMode: 'contain',
    width: horizontalScale(125),
    height: verticalScale(125),
    borderRadius: moderateScale(8),
  },
  detailsContainer: {
    borderBottomLeftRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    backgroundColor: colors.themeColor,
    justifyContent: 'space-between',
    rowGap: verticalScale(20),
  },
  priceDiscountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productNameText: {
    fontWeight: '700',
    color: colors.black,
    fontSize: moderateScale(12),
  },
  priceText: {
    fontWeight: '800',
    color: colors.black,
    fontSize: moderateScale(13),
  },
  priceDiscount: {
    color: colors.green,
    fontWeight: '700',
    fontSize: moderateScale(13),
  },
  listFooter: {
    marginBottom: 1,
  },
});
