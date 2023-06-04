import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  colors,
} from '../../../theme';
export const categoryStyles = StyleSheet.create({
  containerNotSelected: {
    height: verticalScale(50),
    backgroundColor: colors.themeColor,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.themeColor,
  },
  containerSelected: {
    height: verticalScale(50),
    backgroundColor: colors.black,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.themeColor,
  },
  categoryTextSelected: {
    height: verticalScale(17),
    marginHorizontal: horizontalScale(20),
    fontSize: moderateScale(14),
    color: colors.white,
    fontWeight: '600',
    marginVertical: verticalScale(10),
  },
  categoryTextNotSelected: {
    height: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    fontSize: moderateScale(14),
    color: colors.black,
    fontWeight: '600',
    marginVertical: verticalScale(10),
  },
});
