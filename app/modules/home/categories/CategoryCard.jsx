import {Text, TouchableOpacity} from 'react-native';
import {categoryStyles} from './CategoryStyles';
import useCategory from './useCategory';

const Category = ({category}) => {
  const {categorySelected, setCategory} = useCategory();

  return (
    <TouchableOpacity
      style={
        category?.name.toUpperCase() === categorySelected
          ? categoryStyles.containerSelected
          : categoryStyles.containerNotSelected
      }
      onPress={() => setCategory(category)}>
      <Text
        style={
          category?.name.toUpperCase() === categorySelected
            ? categoryStyles.categoryTextSelected
            : categoryStyles.categoryTextNotSelected
        }>
        {category?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;
