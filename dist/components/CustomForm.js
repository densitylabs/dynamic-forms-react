"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CustomForm = require("../services/CustomForm");

var _reactJsonschemaForm = _interopRequireDefault(require("react-jsonschema-form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var CustomForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomForm, _React$Component);

  function CustomForm(props) {
    var _this;

    _classCallCheck(this, CustomForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomForm).call(this, props));
    _this.state = {
      json_schema: {},
      ui_schema: {}
    };
    _this.getSchema = _this.getSchema.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CustomForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSchema();
    }
  }, {
    key: "getSchema",
    value: function getSchema() {
      var _this2 = this;

      (0, _CustomForm.getForm)(this.props.formUrl).then(function (response) {
        _this2.setState({
          json_schema: response.data.json_schema
        });

        _this2.setState({
          ui_schema: response.data.ui_schema
        });
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(data) {
      var _this3 = this;

      (0, _CustomForm.submitForm)(this.props.formUrl, data).then(function (res) {
        _this3.props.onSubmit(data);
      }).catch(function (error) {
        _this3.props.onError(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react.default.createElement("div", null, _react.default.createElement(_reactJsonschemaForm.default, {
        schema: this.state.json_schema,
        uiSchema: this.state.ui_schema,
        onSubmit: function onSubmit(data) {
          return _this4.handleSubmit(data.formData);
        },
        onError: function onError(error) {
          return _this4.props.onError(error);
        }
      }));
    }
  }]);

  return CustomForm;
}(_react.default.Component);

var _default = CustomForm;
exports.default = _default;