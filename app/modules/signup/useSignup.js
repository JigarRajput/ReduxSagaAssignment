import {useFormik} from 'formik';
import signUpSchema from './SignUpSchema';
import {strings} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {signUpPending} from '../../redux';

const useSignup = () => {
  const loginStatus = useSelector(state => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    },
    validationSchema: signUpSchema,
    onSubmit(values) {
      handleSignup(values);
    },
  });

  useEffect(() => {
    if (loginStatus.isLoginSuccess)
      navigation.navigate(strings.navigationRoutes.BottomTabs);
  }, [loginStatus.isLoginSuccess]);

  const handleSignup = values => {
    try {
      dispatch(signUpPending(values));
    } catch (e) {}
  };

  return {
    formik,
    loginStatus,
    navigation,
  };
};

export default useSignup;
