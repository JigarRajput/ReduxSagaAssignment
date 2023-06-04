import {colors, horizontalScale, moderateScale} from '../../../theme';
import {verticalScale} from '../../../theme';

import {StyleSheet} from 'react-native';

const cartStyles = StyleSheet.create({
  mainContainerCartScreen: {
    flex: 1,
  },
  summaryContainer: {
    padding: moderateScale(10),
    borderBottomColor: colors.grey,
    borderBottomWidth:1
  },
  subtotalContainer: {
    flexDirection: 'row',
    columnGap: horizontalScale(15),
  },
  yourCartTextCartScreen: {
    fontWeight: '700',
    color: colors.black,
    fontSize: moderateScale(20),
    marginVertical: verticalScale(15),
  },
  bottom: {
    flex: 1,
    maxHeight: verticalScale(150),
    shadowColor: colors.black,
    padding: moderateScale(10),
    borderRadius: moderateScale(15),
    backgroundColor: colors.white,
    shadowOffset: {
      width: horizontalScale(1),
      height: verticalScale(6),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(6),
    elevation: moderateScale(5),
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIconContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  subtotalText: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(5),
    fontWeight: '400',
    color: colors.grey,
  },
  subtotalValue: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(5),
    fontWeight: '600',
    color: colors.black,
  },
  productsContainer: {
    flex: 1,
    paddingBottom: verticalScale(70),
  },
  greenCheck: {
    width: 30,
    height: 30,
  },
  checkOutBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(15),
  },
  checkOutBtnText: {
    color: colors.black,
    fontSize: moderateScale(16),
  },
  freeDeliveryMessageContainer: {
    flexDirection: 'row',
    padding: moderateScale(0),
    columnGap: horizontalScale(5),
    alignItems:'center'
  },
});

export default cartStyles;
