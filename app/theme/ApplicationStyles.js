import { StyleSheet } from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from './metrics';
import colors from './colors';

const applicationStyles = StyleSheet.create({
  tabBarStyle: {
    height: verticalScale(55),
    position: 'absolute',
    bottom: verticalScale(15),
    left: horizontalScale(20),
    right: horizontalScale(20),
    paddingBottom: verticalScale(20),
    borderRadius: moderateScale(15),
    backgroundColor: colors.black,
  },
  tabBarBadgeStyle: {
    position: 'absolute',
    top: moderateScale(-10),
  },
  tabBarIconStyle: {
    marginTop: verticalScale(15),
  },
  displayNone: {
    display:'none'
  }
});

export default applicationStyles;
