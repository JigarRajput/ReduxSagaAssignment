import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  colors,
} from '../../theme';

export const bannerStyles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.themeColor,
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(20),
  },
  bannerLeft: {
    justifyContent: 'space-between',
    padding: moderateScale(20),
    rowGap: verticalScale(20),
  },
  bannerRight: {
      padding: moderateScale(20),
      paddingEnd:horizontalScale(30)
  },
  shopNowBtn: {
    maxWidth: '50%',
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(8),
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    borderWidth: 1,
  },
  bannerLeftText: {
    maxWidth: '70%',
    flexWrap: 'wrap',
    color: colors.black,
    fontWeight: '600',
    fontSize: moderateScale(14),
  },
  shopNowBtnText: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: colors.black,
  },
  headphonesImg: {
    width: horizontalScale(80),
    height: verticalScale(100),
  },
});
