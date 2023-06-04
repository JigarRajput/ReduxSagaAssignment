import {useFormik} from 'formik';
import loginSchema from './LoginSchema';
import {loginThunk} from '../../redux/thunks';
import {strings} from '../../constants';
import {useEffect} from 'react';
import { loginPending } from '../../redux';

const useLogin = (navigation, dispatch, loginStatus) => {
  
  useEffect(() => {
    if (loginStatus.isLoginSuccess)
      navigation.navigate(strings.navigationRoutes.BottomTabs);
  }, [loginStatus.isLoginSuccess]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit(values) {
      handleLogin(values);
    },
  });

  const handleLogin = values => {
    try {
     dispatch(loginPending(values));
    } catch (e) {}
  };

  return formik;
};

export default useLogin;
