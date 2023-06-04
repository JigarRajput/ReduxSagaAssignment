import {View, Text, FlatList, ScrollView} from 'react-native';
import {useEffect} from 'react';
import Banner from './Banner';
import homeStyles from './HomeStyles';
import {strings} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import Category from './categories/CategoryCard';
import {ProductCard} from './product-card';
import {CustomLoader} from '../../components';
import {colors} from '../../theme';
import {productsFetchPending, categoryFetchPending} from '../../redux';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(productsFetchPending());
    dispatch(categoryFetchPending());
  }, []);

  return (
    <ScrollView
      stickyHeaderIndices={[2]}
      bounces={false}
      contentContainerStyle={homeStyles}
      showsVerticalScrollIndicator={false}>
      <Banner />
      <Text style={homeStyles.categoryLabel}>{strings.categoriesLabel}</Text>
      <View style={homeStyles.categories}>
        {!categories.isLoading ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={homeStyles.contentContainerCategory}
            horizontal={true}
            data={categories.categories}
            renderItem={({item}) => <Category category={item} />}
            keyExtractor={(item, index) => item + index}
          />
        ) : (
          <CustomLoader
            animating={categories.isLoading}
            color={colors.black}
            size={strings.loaderSizes.large}
          />
        )}

        <Text style={homeStyles.recommendedLabel}>
          {strings.recommendedLabel}
        </Text>
      </View>
      {!products.isLoading ? (
        <FlatList
          scrollEnabled={false}
          data={products.categoryProducts}
          numColumns={2}
          nestedScrollEnabled
          contentContainerStyle={homeStyles.contentContainerProduct}
          renderItem={({item}) => (
            <ProductCard product={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => item?.id}
        />
      ) : (
        <CustomLoader
          animating={categories.isLoading}
          color={colors.black}
          size={strings.loaderSizes.large}
        />
      )}
    </ScrollView>
  );
};

export default HomeScreen;
