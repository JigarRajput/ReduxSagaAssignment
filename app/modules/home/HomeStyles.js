import {StyleSheet, Platform} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  colors,
} from '../../theme';

const homeStyles = StyleSheet.create({
  contentContainerCategory: {
    marginVertical: verticalScale(10),
  },
  contentContainerProduct: {
    alignItems: 'center',
    marginVertical: verticalScale(15),
    paddingBottom: '12%',
  },
  categories: {
    paddingVertical: verticalScale(10),
    backgroundColor: colors.white,
  },
  categoryLabel: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: colors.black,
    marginHorizontal: horizontalScale(10),
    marginTop: verticalScale(15),
  },
  recommendedLabel: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginHorizontal: horizontalScale(10),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    color: colors.black,
  },
  searchInput: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    columnGap: horizontalScale(20),
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: Platform.OS === 'android' ? 0 : verticalScale(15),
    shadowColor: colors.black,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(2),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(3.84),
    elevation: moderateScale(5),
  },
  searchText: {
    fontSize: moderateScale(14),
  },
  inputLeftImg: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
});

export default homeStyles;
