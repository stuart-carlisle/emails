'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('./layout/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Header = require('./elements/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./elements/Body');

var _Body2 = _interopRequireDefault(_Body);

var _Message = require('./elements/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Footer = require('./elements/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {

  container: {
    backgroundColor: 'black',
    padding: '20px 0 0 0',
    fontFamily: 'Josefin Sans, Roboto, sans-serif'
  },

  main: {
    maxWidth: '500px',
    width: '100%'
  }

};

function Email(_ref) {
  var data = _ref.data;

  return _react2.default.createElement(
    'center',
    { style: style.container, className: 'container' },
    _react2.default.createElement(
      _Grid2.default,
      { style: style.main },
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        _Body2.default,
        null,
        _react2.default.createElement(_Message2.default, { name: data.name })
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
}

exports.default = Email;