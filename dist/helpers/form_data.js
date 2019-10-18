"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formDataFrom = formDataFrom;

function formDataFrom(values) {
  var formData = new FormData();

  for (var key in values) {
    formData.append(key, values[key]);
  }

  return formData;
}