"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    style: {
      padding: '10px 20px',
      background: '#007bff',
      color: '#fff'
    }
  }, label);
};
var _default = exports["default"] = Button;