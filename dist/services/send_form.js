"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendForm = sendForm;

var _form_data = require("../helpers/form_data");

function sendForm(values, endPoint) {
  return fetch(endPoint, {
    method: 'POST',
    body: (0, _form_data.formDataFrom)(values)
  }).then(function (res) {
    return res;
  }).catch(function (error) {
    throw new Error();
  }).then(function (response) {
    if (response.status !== 200) {
      throw new Error();
    }
  });
}