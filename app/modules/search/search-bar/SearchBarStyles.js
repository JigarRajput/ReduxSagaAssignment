import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../../theme';

const searchStyles = StyleSheet.create({
  container: {
    borderBottomWidth: moderateScale(0.4),
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
    paddingVertical: Platform.OS === 'android' ? 0 : verticalScale(10),
    borderWidth: moderateScale(1),
    borderColor: colors.grey,
  },
  searchText: {
    fontSize: moderateScale(14),
    width: '100%',
    height: '100%',
  },
  inputLeftImg: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
});

export default searchStyles;
