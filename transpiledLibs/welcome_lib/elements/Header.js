"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Grid = require("../layout/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _Img = require("./Img");

var _Img2 = _interopRequireDefault(_Img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logoSrc = "https://www.dropbox.com/s/ba4ftrlkezawrjf/rate-whisky-big-email.png?dl=1";
var appLink = "https://whisky-review-app-react.herokuapp.com/";

var style = {
  header: {
    margin: "0px auto 0px auto",
    width: "auto",
    borderCollapse: "collapse"
  },
  img: {
    margin: "10px auto 20px auto",
    height: "100px",
    paddingTop: "5px"
  },
  goldLineContainer: {
    width: "100%"
  },
  goldLine: {
    height: "1px",
    width: "100%",
    backgroundColor: "#BF9100",
    padding: "0"
  }
};

function Header() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _Grid2.default,
      { style: style.header },
      _react2.default.createElement(_Img2.default, { style: style.img, src: logoSrc, alt: "logo", link: appLink, className: "header-logo" })
    ),
    _react2.default.createElement(
      _Grid2.default,
      { style: style.goldLineContainer },
      _react2.default.createElement(_Grid2.default.Cell, {
        style: style.goldLine,
        className: "header-gold-line"
      })
    )
  );
}

exports.default = Header;