import {StyleSheet} from 'react-native';
import {
  colors,
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../../theme';

const signUpStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
    rowGap: verticalScale(15),
  },
  top: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    marginBottom: verticalScale(5),
    marginTop: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
  },
  bottom: {
    flex: 1,
    rowGap: verticalScale(15),
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(40),
    backgroundColor: colors.themeColor,
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  shopIcon: {
    width: horizontalScale(170),
    height: verticalScale(180),
    borderRadius: moderateScale(60),
  },
  signUpContainer: {
    paddingVertical: verticalScale(10),
  },
  signUpText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: colors.black,
  },
  signUpBtn: {
    marginVertical: verticalScale(30),
    width: '100%',
    paddingVertical: verticalScale(15),
    backgroundColor: colors.black,
    alignItems: 'center',
    borderRadius: moderateScale(15),
  },
  signUpBtnTxt: {
    color: colors.white,
    fontSize: moderateScale(16),
  },
  alreadyUser: {
    alignItems: 'center',
    paddingTop: verticalScale(5),
    paddingBottom: verticalScale(20),
  },
  alreadyUserText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
});

export default signUpStyles;
