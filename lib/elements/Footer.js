"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Grid = require("../layout/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  img: {
    width: "100%"
  },
  footer: {
    margin: 0
  }
};

function Footer() {
  return _react2.default.createElement(
    _Grid2.default,
    { style: style.footer },
    _react2.default.createElement(
      _Grid2.default.Cell,
      null,
      _react2.default.createElement("img", {
        style: style.img,
        src: "https://www.dropbox.com/s/lqmidzptpcfts62/talisker.png?dl=1",
        alt: "footer"
      })
    )
  );
}

exports.default = Footer;