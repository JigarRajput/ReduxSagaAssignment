import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { strings } from '../../constants';
import customHeaderStyles from './CustomHeaderStyles';
import { moderateScale } from '../../theme';
import { ArrowLeft } from 'phosphor-react-native';

const CustomHeaderWithBack = ({navigation, options, route, title}) => {
  return (
    <SafeAreaView>
      <View style={customHeaderStyles.container}>
        <TouchableOpacity
          style={customHeaderStyles.flexOne}
          onPress={() => {
            if (route.name === strings.navigationRoutes.OrderDetailsScreen) {
              navigation.navigate(strings.navigationRoutes.HomeScreen);
              return;
            }
            navigation.goBack();
          }}>
          <ArrowLeft size={moderateScale(35)} weight="bold" />
        </TouchableOpacity>
        <View style={customHeaderStyles.flexTwo}>
          <Text style={customHeaderStyles.headerText}>{title}</Text>
        </View>
        <View style={customHeaderStyles.flexOne} />
      </View>
    </SafeAreaView>
  );
};

export default CustomHeaderWithBack;
