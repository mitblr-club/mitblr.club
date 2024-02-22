import * as Yup from 'yup';

export const FirstStepValidationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string().email().required('This field is required'),
  phoneNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Input is invalid')
    .required('This field is required'),
  applicationNumber: Yup.string()
    .matches(/^12[1234]\d{6}$/, 'Input is invalid')
    .required('This field is required'),
  registrationNumber: Yup.string()
    .matches(/^2[1234]\d{7}$/, 'Input is invalid')
    .required('This field is required'),
});
