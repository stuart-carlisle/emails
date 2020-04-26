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
  message: {
    fontSize: "1.8rem",
    color: "white",
    maxWidth: "500px",
    margin: "0 auto"
  },
  gold: {
    color: "#BF9100"
  },
  twitterImg: {
    height: '30px',
    marginTop: '10px'
  },
  fbImg: {
    height: '30px',
    marginTop: '10px',
    marginLeft: '10px'
  }
};

function Message(_ref) {
  var name = _ref.name;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _Grid2.default,
      null,
      _react2.default.createElement(
        _Grid2.default.Cell,
        { style: style.message, className: "message-body" },
        _react2.default.createElement(
          "p",
          null,
          "Dear " + name + ","
        ),
        _react2.default.createElement(
          "p",
          null,
          "We're sorry to hear you have decided to cancel with us."
        ),
        _react2.default.createElement(
          "p",
          null,
          "Is there anything we could do to keep you."
        ),
        _react2.default.createElement(
          "p",
          null,
          "Please reply and let us know."
        ),
        _react2.default.createElement(
          "p",
          null,
          "Regards,"
        ),
        _react2.default.createElement(
          "p",
          { style: style.gold },
          "Rate Whisky Team"
        )
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      null,
      _react2.default.createElement(
        _Grid2.default.Cell,
        null,
        _react2.default.createElement(
          "a",
          { href: "http://www.twitter.com" },
          _react2.default.createElement("img", {
            className: "link-image",
            style: style.twitterImg,
            src: "https://www.dropbox.com/s/abgg60mm0m427q2/twitter_icon.png?dl=1",
            alt: "twitter"
          })
        ),
        _react2.default.createElement(
          "a",
          { href: "http://www.facebook.com" },
          _react2.default.createElement("img", {
            className: "link-image",
            style: style.fbImg,
            src: "https://www.dropbox.com/s/esfj06hmmgwk3mu/fb_icon.png?dl=1",
            alt: "facebook"
          })
        )
      )
    )
  );
}

exports.default = Message;