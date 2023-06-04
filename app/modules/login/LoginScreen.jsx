import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {loginStyles} from './LoginStyles';
import {images} from '../../assets';
import {strings} from '../../constants';
import {CustomInput, CustomLoader} from '../../components';
import useLogin from './useLogin';
import {useInitializeRefs} from '../../hooks';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {handleSubmitEdit} from '../../utils';
import {colors} from '../../theme';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.auth);
  const formik = useLogin(navigation, dispatch, loginStatus);
  const formRefs = useInitializeRefs(2);

  return (
    <View style={loginStyles.mainContainer}>
      <View style={loginStyles.top}>
        <Image source={images.shoppingBanner} style={loginStyles.shopIcon} />
      </View>

      <View style={loginStyles.bottom}>
        <Text style={loginStyles.loginText}>{strings.loginToContinue}</Text>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <CustomInput
              ref={ref => (formRefs.current[0] = ref)}
              formik={formik}
              name={strings.inputFieldNames.email}
              handleSubmitEditing={() => handleSubmitEdit(formRefs, 0)}
              returnKeyType="next"
            />
            <CustomInput
              ref={ref => (formRefs.current[1] = ref)}
              formik={formik}
              name={strings.inputFieldNames.password}
              handleSubmitEditing={() => handleSubmitEdit(formRefs, 1)}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={loginStyles.loginBtn}
              disabled={loginStatus.isLoading}
              onPress={formik.handleSubmit}>
              {loginStatus.isLoading ? (
                <CustomLoader
                  animating={loginStatus.isLoading}
                  size={strings.loaderSizes.small}
                  color={colors.white}
                />
              ) : (
                <Text style={loginStyles.loginBtnTxt}>
                  {strings.loginBtnText}
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={loginStyles.notAUser}
              onPress={() => {
                navigation.navigate(strings.navigationRoutes.SignUpScreen);
              }}>
              <Text style={loginStyles.notAUserText}>{strings.notAUser}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;
