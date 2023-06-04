import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';

const orderScreenStyles = StyleSheet.create({
  orderListContainer: {
    flex: 1,
    paddingVertical: verticalScale(25),
    paddingHorizontal: horizontalScale(10),
    },
    yourOrdersText: {
        paddingVertical:verticalScale(10),
        fontSize: moderateScale(18),
        fontWeight: '600'
    },
  mainContainer: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  quantityTextValue: {
    fontSize: moderateScale(14),
    fontWeight: '800',
  },
  greenCheckTextContainer: {
    alignItems: 'center',
  },
  greenCheck: {
    width: horizontalScale(180),
    height: verticalScale(180),
  },
  orderSuccessText: {
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  orderDetailsText: {
    fontSize: moderateScale(20),
    fontWeight: '600',
  },
  quantityText: {
    fontSize: moderateScale(14),
  },
  totalQuantityContainer: {
    backgroundColor: colors.themeColor,
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(20),
    rowGap: verticalScale(15),
  },
  totalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderSummaryText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginBottom: verticalScale(10),
  },
  promoCodeBtn: {
    marginTop: verticalScale(20),
    alignItems: 'center',
    backgroundColor: colors.themeColor,
    paddingVertical: verticalScale(18),
  },
  promoCodeText: {
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
});

export default orderScreenStyles;
