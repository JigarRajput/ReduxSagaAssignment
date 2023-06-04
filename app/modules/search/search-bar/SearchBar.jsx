import {TextInput, View} from 'react-native';
import {MagnifyingGlass} from 'phosphor-react-native';
import searchStyles from './SearchBarStyles';
import {strings} from '../../../constants';
import {moderateScale, colors} from '../../../theme';
import {useDispatch} from 'react-redux';
import {searchPending} from '../../../redux';

const SearchBar = () => {
  const dispatch = useDispatch();
  
  const handleSearch = text => {
    dispatch(searchPending(text));
  };

  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.searchInput}>
        <MagnifyingGlass size={moderateScale(20)} />
        <TextInput
          placeholder={strings.searchBarText}
          placeholderTextColor={colors.black}
          onChangeText={text => handleSearch(text)}
          style={searchStyles.searchText}
        />
      </View>
    </View>
  );
};

export default SearchBar;
