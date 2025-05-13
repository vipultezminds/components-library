"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DataTable = function DataTable(_ref) {
  var data = _ref.data,
    columns = _ref.columns,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 5 : _ref$pageSize;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    sortBy = _useState2[0],
    setSortBy = _useState2[1];
  var _useState3 = (0, _react.useState)('asc'),
    _useState4 = _slicedToArray(_useState3, 2),
    sortOrder = _useState4[0],
    setSortOrder = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchQuery = _useState6[0],
    setSearchQuery = _useState6[1];
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPage = _useState8[0],
    setCurrentPage = _useState8[1];
  var handleSort = function handleSort(columnKey) {
    if (sortBy === columnKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(columnKey);
      setSortOrder('asc');
    }
  };
  var filteredData = (0, _react.useMemo)(function () {
    return data.filter(function (row) {
      return Object.values(row).some(function (value) {
        return String(value).toLowerCase().includes(searchQuery.toLowerCase());
      });
    });
  }, [data, searchQuery]);
  var sortedData = (0, _react.useMemo)(function () {
    if (!sortBy) return filteredData;
    return _toConsumableArray(filteredData).sort(function (a, b) {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortBy, sortOrder]);
  var paginatedData = (0, _react.useMemo)(function () {
    var startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);
  var totalPages = Math.ceil(sortedData.length / pageSize);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '1rem',
      fontFamily: 'Arial'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Search...",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    },
    style: {
      padding: '0.5rem',
      marginBottom: '1rem',
      width: '100%'
    }
  }), /*#__PURE__*/_react["default"].createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (col) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: col.key,
      onClick: function onClick() {
        return handleSort(col.key);
      },
      style: {
        cursor: 'pointer',
        borderBottom: '1px solid #ccc',
        padding: '0.5rem',
        textAlign: 'left'
      }
    }, col.label, sortBy === col.key ? sortOrder === 'asc' ? ' ▲' : ' ▼' : '');
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, paginatedData.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: index
    }, columns.map(function (col) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: col.key,
        style: {
          borderBottom: '1px solid #eee',
          padding: '0.5rem'
        }
      }, row[col.key]);
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setCurrentPage(function (p) {
        return Math.max(p - 1, 1);
      });
    },
    disabled: currentPage === 1
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("span", null, "Page ", currentPage, " of ", totalPages), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setCurrentPage(function (p) {
        return Math.min(p + 1, totalPages);
      });
    },
    disabled: currentPage === totalPages
  }, "Next")));
};
var _default = exports["default"] = DataTable;