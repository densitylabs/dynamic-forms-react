"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.getForm = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _form_data = require("../helpers/form_data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

var getForm = function getForm(url) {
  return _axios.default.get(url);
};

exports.getForm = getForm;

var submitForm = function submitForm(url, data) {
  return _axios.default.post(url, (0, _form_data.formDataFrom)(data), headers);
};

exports.submitForm = submitForm;