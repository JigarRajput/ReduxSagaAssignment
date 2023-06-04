import {ActivityIndicator, View} from 'react-native';
import loaderStyles from './CustomLoaderStyles';

const CustomLoader = ({size, animating, color}) => {
  return (
    <View style={loaderStyles.wrapper}>
      <ActivityIndicator
        size={size}
        animating={animating}
        color={color}
        hidesWhenStopped={true}
      />
    </View>
  );
};

export default CustomLoader;
