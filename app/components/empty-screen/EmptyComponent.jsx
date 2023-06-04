import {View, Text, TouchableOpacity, Image} from 'react-native';
import {strings} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import emptyComponentStyles from './EmptyComponentStyles';

const EmptyComponent = ({image}) => {
  const navigation = useNavigation();

  return (
    <View style={emptyComponentStyles.container}>
      <Image source={image} style={emptyComponentStyles.img} />
      <TouchableOpacity
        style={emptyComponentStyles.shopNowBtn}
        onPress={() =>
          navigation.navigate(strings.navigationRoutes.HomeScreen)
        }>
        <Text style={emptyComponentStyles.shopNowBtnText}>
          {strings.shopNow}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyComponent;
