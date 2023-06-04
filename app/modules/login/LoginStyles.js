import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  colors,
} from '../../theme';

export const loginStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  loginText: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    paddingBottom: verticalScale(20),
  },
  textWarning: {
    color: colors.red,
    fontSize: moderateScale(12),
    marginVertical: moderateScale(2),
  },
  inputContainer: {
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(10),
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(2),
    borderColor: colors.grey,
  },
  inputs: {
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  btnContainer: {
    width: '80%',
    alignItems: 'center',
  },
  loginBtn: {
    marginTop: verticalScale(20),
    width: '100%',
    paddingVertical: verticalScale(15),
    backgroundColor: colors.black,
    alignItems: 'center',
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(20),
  },
  loginBtnTxt: {
    color: colors.white,
    fontSize: moderateScale(16),
  },
  top: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    marginBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  shopIcon: {
    width: horizontalScale(200),
    height: verticalScale(240),
    borderRadius: moderateScale(60),
  },
  bottom: {
    flex: 4,
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(40),
    backgroundColor: colors.themeColor,
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  notAUser: {
    alignItems: 'center',
    paddingTop: verticalScale(5),
    paddingBottom: verticalScale(40),
  },
  notAUserText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
});
