"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CustomModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomModal, _React$Component);

  function CustomModal(props) {
    _classCallCheck(this, CustomModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomModal).call(this, props));
  }

  _createClass(CustomModal, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactstrap.Modal, {
        isOpen: this.props.show,
        toggle: this.props.toggle,
        centered: this.props.centered
      }, _react.default.createElement(_reactstrap.ModalHeader, {
        toggle: this.props.toggle
      }, this.props.title, " "), _react.default.createElement(_reactstrap.ModalBody, null, this.props.body), _react.default.createElement(_reactstrap.ModalFooter, null, _react.default.createElement(_reactstrap.Button, {
        color: "danger",
        onClick: this.props.toggle
      }, this.props.closeButtonText)));
    }
  }]);

  return CustomModal;
}(_react.default.Component);

CustomModal.propTypes = {
  show: _propTypes.default.bool,
  toggle: _propTypes.default.func,
  title: _propTypes.default.string,
  body: _propTypes.default.string,
  centered: _propTypes.default.bool,
  closeButtonText: _propTypes.default.string
};
var _default = CustomModal;
exports.default = _default;