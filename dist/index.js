"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

var _formik = require("formik");

var Service = _interopRequireWildcard(require("./services/send_form"));

var _form_validator = require("./helpers/form_validator");

var _CustomModal = _interopRequireDefault(require("./components/CustomModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var initialValues = {
  name: '',
  email: '',
  company: '',
  message: ''
};

var DynamicForms =
/*#__PURE__*/
function (_Component) {
  _inherits(DynamicForms, _Component);

  function DynamicForms(props) {
    var _this;

    _classCallCheck(this, DynamicForms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicForms).call(this, props));
    _this.state = {
      showModal: false,
      modalMessage: ''
    };
    return _this;
  }

  _createClass(DynamicForms, [{
    key: "openModal",
    value: function openModal(messageOptions) {
      this.setState({
        modalMessage: messageOptions,
        showModal: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", null, _react.default.createElement(_formik.Formik, {
        initialValues: initialValues,
        validationSchema: _form_validator.FormValidator,
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting,
              resetForm = _ref.resetForm;
          Service.sendForm(values, _this2.props.endPoint).then(function () {
            setSubmitting(false);

            _this2.openModal(_this2.props.onSuccess);

            resetForm(initialValues);
          }, function (err) {
            setSubmitting(false);

            _this2.openModal(_this2.props.onError);
          });
        }
      }, function (_ref2) {
        var values = _ref2.values,
            errors = _ref2.errors,
            isSubmitting = _ref2.isSubmitting,
            touched = _ref2.touched,
            setFieldValue = _ref2.setFieldValue,
            setFieldTouched = _ref2.setFieldTouched;
        return _react.default.createElement(_formik.Form, {
          className: "py-4"
        }, _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
          md: 12
        }, _react.default.createElement(_reactstrap.FormGroup, null, _react.default.createElement(_reactstrap.Label, {
          for: "name",
          className: "font-weight-bold"
        }, "Nombre: *"), _react.default.createElement(_reactstrap.Input, {
          type: "text",
          name: "name",
          id: "name",
          tag: _formik.Field,
          invalid: Boolean(touched.name && errors.name),
          "aria-required": true
        }), _react.default.createElement(_formik.ErrorMessage, {
          name: "name",
          component: _reactstrap.FormFeedback
        })))), _react.default.createElement(_reactstrap.FormGroup, null, _react.default.createElement(_reactstrap.Label, {
          for: "email",
          className: "font-weight-bold"
        }, "Correo electr\xF3nico: *"), _react.default.createElement(_reactstrap.Input, {
          type: "email",
          name: "email",
          id: "email",
          tag: _formik.Field,
          invalid: Boolean(touched.email && errors.email),
          "aria-required": true
        }), _react.default.createElement(_formik.ErrorMessage, {
          name: "email",
          component: _reactstrap.FormFeedback
        })), _react.default.createElement(_reactstrap.FormGroup, null, _react.default.createElement(_reactstrap.Label, {
          for: "company",
          className: "font-weight-bold"
        }, "Company: "), _react.default.createElement(_reactstrap.Input, {
          type: "text",
          name: "company",
          id: "company",
          tag: _formik.Field,
          invalid: Boolean(touched.company && errors.company),
          "aria-required": true
        }), _react.default.createElement(_formik.ErrorMessage, {
          name: "company",
          component: _reactstrap.FormFeedback
        })), _react.default.createElement(_reactstrap.FormGroup, null, _react.default.createElement(_reactstrap.Label, {
          for: "message",
          className: "font-weight-bold"
        }, "Message: *"), _react.default.createElement(_reactstrap.Input, {
          type: "textarea",
          name: "message",
          id: "company",
          tag: _formik.Field,
          invalid: Boolean(touched.message && errors.message),
          "aria-required": true,
          component: "textarea"
        }), _react.default.createElement(_formik.ErrorMessage, {
          name: "message",
          component: _reactstrap.FormFeedback
        })), _react.default.createElement(_reactstrap.Button, {
          color: "danger",
          type: "submit",
          className: "mt-4 px-5",
          disabled: isSubmitting
        }, "Submit"));
      }), this.state.showModal && _react.default.createElement(_CustomModal.default, {
        show: this.state.showModal,
        toggle: function toggle() {
          return _this2.setState({
            showModal: false
          });
        },
        title: this.state.modalMessage['title'],
        body: this.state.modalMessage['body'],
        centered: true,
        closeButtonText: "Close"
      }));
    }
  }]);

  return DynamicForms;
}(_react.Component);

DynamicForms.propTypes = {
  endPoint: _propTypes.default.string,
  onSuccess: _propTypes.default.object,
  onError: _propTypes.default.object
};
var _default = DynamicForms;
exports.default = _default;