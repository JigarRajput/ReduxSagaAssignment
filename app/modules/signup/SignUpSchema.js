import * as yup from 'yup';
import {strings} from '../../constants';

const signUpSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(strings.yupErrors.passwordEmpty),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
});

export default signUpSchema;
