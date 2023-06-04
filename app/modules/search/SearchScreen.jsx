import {View, FlatList} from 'react-native';
import {SearchBar} from './search-bar';
import {useDispatch, useSelector} from 'react-redux';
import {SearchProductCard} from './product-card';
import {useEffect} from 'react';
import {searchPending} from '../../redux';
import {CustomLoader} from '../../components';
import {colors} from '../../theme';
import {strings} from '../../constants';

const SearchScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchPending(''));
  }, []);

  const searchStatus = useSelector(state => state.search);

  return (
    <View>
      <SearchBar />
      {!searchStatus.isLoading ? (
        <FlatList
          data={searchStatus.searchResults}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => <SearchProductCard product={item} />}
        />
      ) : (
        <CustomLoader
          color={colors.black}
          size={strings.loaderSizes.large}
          animating={searchStatus.isLoading}
        />
      )}
    </View>
  );
};

export default SearchScreen;
