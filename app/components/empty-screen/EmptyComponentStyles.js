import {StyleSheet} from 'react-native';
import {
  colors,
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../theme';

const emptyComponentStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: {
    width: horizontalScale(250),
    height: verticalScale(250),
  },
  shopNowBtn: {
    marginVertical: verticalScale(20),
    backgroundColor: colors.black,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
  },
  shopNowBtnText: {
    color: colors.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});

export default emptyComponentStyles;
