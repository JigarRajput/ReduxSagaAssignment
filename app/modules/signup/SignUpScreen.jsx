import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import signUpStyles from './SignUpStyles';
import {CustomInput, CustomLoader} from '../../components';
import {useInitializeRefs} from '../../hooks';
import {images} from '../../assets';
import {strings} from '../../constants';
import useSignup from './useSignup';
import {colors} from '../../theme';
import {handleSubmitEdit} from '../../utils';

const SignUpScreen = () => {
  const formRefs = useInitializeRefs(4);
  const {formik, loginStatus, navigation} = useSignup();

  return (
    <View style={signUpStyles.mainContainer}>
      <View style={signUpStyles.top}>
        <Image source={images.shoppingBanner} style={signUpStyles.shopIcon} />
      </View>
      <KeyboardAvoidingView
        style={signUpStyles.bottom}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={signUpStyles.signUpContainer}>
          <Text style={signUpStyles.signUpText}>{strings.signUp}</Text>
        </View>

        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <CustomInput
            ref={ref => (formRefs.current[0] = ref)}
            formik={formik}
            name={strings.inputFieldNames.firstname}
            handleSubmitEditing={() => handleSubmitEdit(formRefs, 0)}
            returnKeyType="next"
          />
          <CustomInput
            ref={ref => (formRefs.current[1] = ref)}
            formik={formik}
            name={strings.inputFieldNames.lastname}
            handleSubmitEditing={() => handleSubmitEdit(formRefs, 1)}
            returnKeyType="next"
          />
          <CustomInput
            ref={ref => (formRefs.current[2] = ref)}
            formik={formik}
            name={strings.inputFieldNames.email}
            handleSubmitEditing={() => handleSubmitEdit(formRefs, 2)}
            returnKeyType="next"
          />
          <CustomInput
            ref={ref => (formRefs.current[3] = ref)}
            formik={formik}
            name={strings.inputFieldNames.password}
            handleSubmitEditing={() => handleSubmitEdit(formRefs, 3)}
            returnKeyType="done"
          />
          <TouchableOpacity
            disabled={loginStatus.isLoading}
            style={signUpStyles.signUpBtn}
            onPress={formik.handleSubmit}>
            {loginStatus.isLoading ? (
              <CustomLoader
                animating={loginStatus.isLoading}
                size={strings.loaderSizes.small}
                color={colors.white}
              />
            ) : (
              <Text style={signUpStyles.signUpBtnTxt}>{strings.register}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={signUpStyles.alreadyUser}
            onPress={() => {
              navigation.navigate(strings.navigationRoutes.LoginScreen);
            }}>
            <Text style={signUpStyles.alreadyUserText}>
              {strings.alreadyUser}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;
