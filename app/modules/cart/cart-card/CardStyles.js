import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
  colors,
} from '../../../theme';

const cartCardStyles = StyleSheet.create({
  mainContainerCartCard: {
    flexDirection: 'row',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20),
    padding: moderateScale(10),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: horizontalScale(1),
      height: verticalScale(6),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(6),
    elevation: moderateScale(5),
  },
  leftImgContainerCartCard: {
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(15),
    marginEnd: horizontalScale(20),
  },
  leftImgCartCard: {
    width: horizontalScale(100),
    height: verticalScale(120),
  },
  rightContainerCartCard: {
    justifyContent: 'space-between',
    flex: 1,
  },
  productTitle: {
    paddingEnd: horizontalScale(10),
    maxWidth: horizontalScale(200),
    flexWrap: 'wrap',
    fontSize: moderateScale(12),
  },
  priceText: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    textDecorationLine: 'line-through',
  },
  btnCountContainerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    paddingEnd: horizontalScale(10),
    paddingVertical: verticalScale(2),
  },
  btnCount: {
    justifyContent: 'center',
    backgroundColor: colors.themeColor,
    borderRadius: moderateScale(50),
    padding: moderateScale(2),
    alignItems: 'center',
  },
  countValue: {
    marginHorizontal: horizontalScale(15),
    fontSize: moderateScale(14),
  },
  removeBtn: {
    position: 'absolute',
    top: verticalScale(-10),
    right: horizontalScale(-10),
    backgroundColor: colors.themeColor,
    borderRadius: moderateScale(15),
  },
  ratingContainer: {
    flexDirection: 'row',
    columnGap: horizontalScale(8),
  },
  ratingText: {
    fontSize: moderateScale(12),
  },
  discountText: {
    color: colors.green,
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
  priceDiscountContainer: {
    flexDirection: 'row',
    columnGap: horizontalScale(15),
  },
});
export default cartCardStyles;
