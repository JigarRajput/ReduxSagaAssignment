import * as yup from 'yup';
import {strings} from '../../constants';

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(strings.yupErrors.passwordEmpty),
});

export default loginSchema;
