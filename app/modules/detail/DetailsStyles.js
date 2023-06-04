import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../theme';

const detailsStyles = StyleSheet.create({
  topCantainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    rowGap: verticalScale(20),
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
    paddingTop: verticalScale(30),
  },
  productImage: {
    resizeMode: 'contain',
    width: horizontalScale(180),
    height: verticalScale(180),
  },
  productName: {
    fontSize: moderateScale(14),
  },
  bottomContainer: {
    backgroundColor: colors.themeColor,
    flex: 1,
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(100),
    paddingHorizontal: horizontalScale(20),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  categoryRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: horizontalScale(15),
  },
  productCategory: {
    fontSize: moderateScale(14),
  },
  ratingText: {
    fontSize: moderateScale(14),
  },
  descTextLabel: {
    color: colors.black,
    fontWeight: '700',
    marginVertical: verticalScale(20),
    fontSize: moderateScale(16),
  },
  descContainer: {
    marginBottom: verticalScale(50),
  },
  descTextValue: {
    fontSize: moderateScale(14),
  },
  priceAddCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(100),
  },
  addCartBtn: {
    backgroundColor: colors.black,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
  },
  addCartText: {
    color: colors.themeColor,
    fontSize: moderateScale(14),
  },
  priceText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  backIcon: {
    alignSelf: 'flex-start',
  },
});

export default detailsStyles;
