import {View, Text, TouchableOpacity, Image} from 'react-native';
import {images} from '../../assets';
import {strings} from '../../constants';
import {bannerStyles} from './BannerStyles';
import {useNavigation} from '@react-navigation/native';

const Banner = () => {
  const navigation = useNavigation();
  return (
    <View style={bannerStyles.banner}>
      <View style={bannerStyles.bannerLeft}>
        <Text style={bannerStyles.bannerLeftText}>{strings.bannerMessage}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(strings.navigationRoutes.SearchScreen);
          }}
          style={bannerStyles.shopNowBtn}>
          <Text style={bannerStyles.shopNowBtnText}>{strings.shopNowBtn}</Text>
        </TouchableOpacity>
      </View>
      <View style={bannerStyles.bannerRight}>
        <Image source={images.smartWatch} style={bannerStyles.headphonesImg} />
      </View>
    </View>
  );
};

export default Banner;
