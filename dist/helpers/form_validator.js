"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormValidator = void 0;

var Yup = _interopRequireWildcard(require("yup"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var FormValidator = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email('Please, type a correct email, for example: name@domain.com').required('Entering an email is necessary.'),
  message: Yup.string().required('Message is required.')
});
exports.FormValidator = FormValidator;