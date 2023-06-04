import {StyleSheet} from 'react-native';
import {colors, horizontalScale, moderateScale, verticalScale} from '../../theme';

const customHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    borderBottomWidth: moderateScale(0.4),
    paddingEnd: horizontalScale(20),
    backgroundColor: colors.white,
  },
  cart: {
    position: 'relative',
  },
  cartBadge: {
    color: colors.white,
    paddingVertical:  verticalScale(1),
    paddingHorizontal:horizontalScale(4),
    fontWeight: '600',
  },
  cartBadgeContainer: {
    position: 'absolute',
    backgroundColor: colors.black,
    right: horizontalScale(-4),
    top:verticalScale(-2),
    borderRadius: moderateScale(10),
  },
  rightContainer: {
    flexDirection: 'row',
    columnGap: horizontalScale(25),
  },
  searchIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  headerText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign: 'center',
    color: colors.black,
  },
});

export default customHeaderStyles;
