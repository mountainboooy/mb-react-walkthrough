'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mbWalkthrough = require('mb-walkthrough');

var _mbWalkthrough2 = _interopRequireDefault(_mbWalkthrough);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleWalkthrough = function (_React$Component) {
  _inherits(ExampleWalkthrough, _React$Component);

  function ExampleWalkthrough(props) {
    _classCallCheck(this, ExampleWalkthrough);

    var _this = _possibleConstructorReturn(this, (ExampleWalkthrough.__proto__ || Object.getPrototypeOf(ExampleWalkthrough)).call(this, props));

    _this.state = {
      show: true
    };
    return _this;
  }

  _createClass(ExampleWalkthrough, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state.show) return null;

      return _react2.default.createElement(
        _mbWalkthrough2.default,
        {
          onHide: function onHide() {
            _this2.setState({ show: false });
          },
          width: 400,
          height: 200,
          nextBtnTitle: '\u6B21\u3078',
          backBtnTitle: '\u623B\u308B',
          closeBtnTitle: '\u9589\u3058\u308B',
          animated: false
        },
        _react2.default.createElement(
          _mbWalkthrough2.default.Content,
          null,
          '1'
        ),
        _react2.default.createElement(
          _mbWalkthrough2.default.Content,
          null,
          '2'
        )
      );
    }
  }]);

  return ExampleWalkthrough;
}(_react2.default.Component);

var testComponent = _react2.default.createElement(
  'div',
  null,
  'This is test Compo',
  _react2.default.createElement(ExampleWalkthrough, null)
);

_reactDom2.default.render(testComponent, document.getElementById('test'));