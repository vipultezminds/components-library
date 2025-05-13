"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @param {{ children: React.ReactNode, onClick: () => void, disabled?: boolean }} props
 */

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("button", {
    disabled: disabled,
    onClick: onClick,
    style: {
      padding: '10px',
      fontSize: '16px'
    }
  }, children);
};
var _default = exports["default"] = Button;