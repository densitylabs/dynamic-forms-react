import * as Yup from 'yup'

export const FormValidator = Yup.object().shape({
  name: Yup.string()
    .required('Name is required.'),
  email: Yup.string()
    .email('Please, type a correct email, for example: name@domain.com')
    .required('Entering an email is necessary.'),
  message: Yup.string()
    .required('Message is required.')
})
