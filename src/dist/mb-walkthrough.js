'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalkthroughContent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Walkthrough = function (_React$Component) {
  _inherits(Walkthrough, _React$Component);

  _createClass(Walkthrough, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        onHide: _propTypes2.default.func.isRequired,
        width: _propTypes2.default.number,
        height: _propTypes2.default.number,
        className: _propTypes2.default.string,
        onSlide: _propTypes2.default.func,
        nextBtnTitle: _propTypes2.default.string,
        backBtnTitle: _propTypes2.default.string,
        CloseBtntitle: _propTypes2.default.string,
        animated: _propTypes2.default.bool
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        width: 500,
        height: 400,
        nextBtnTitle: 'Next',
        backBtnTitle: 'Back',
        closeBtnTitle: 'Close',
        animated: true
      };
    }
  }]);

  function Walkthrough(props) {
    _classCallCheck(this, Walkthrough);

    var _this = _possibleConstructorReturn(this, (Walkthrough.__proto__ || Object.getPrototypeOf(Walkthrough)).call(this, props));

    (0, _lodash.bindAll)(_this, ['onClickBack', 'onClickNext', 'onClickIndicator']);

    _this.state = {
      page: 0
    };
    return _this;
  }

  _createClass(Walkthrough, [{
    key: 'onClickBack',
    value: function onClickBack() {
      if (this.state.page <= 0) return;
      this.updatePage(this.state.page - 1);
    }
  }, {
    key: 'onClickNext',
    value: function onClickNext() {
      var maxPage = this.props.children.length - 1;
      if (this.state.page >= maxPage) {
        this.props.onHide();
        return;
      }
      this.updatePage(this.state.page + 1);
    }
  }, {
    key: 'onClickIndicator',
    value: function onClickIndicator(index) {
      this.updatePage(index);
    }
  }, {
    key: 'updatePage',
    value: function updatePage(page) {
      this.setState({ page: page });
      if (this.props.onSlide) {
        this.props.onSlide(page);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.children) return null;
      var amount = this.props.children.length; // 全体のページ数
      var page = this.state.page; // 現在の表示ページ
      var width = this.props.width; // モーダル幅
      var height = this.props.height; // モーダル高

      var modalStyle = {
        width: width + 'px',
        height: height + 'px'
      };

      var containerStyle = {
        transform: 'translateX(' + width * page * -1 + 'px)',
        width: width * amount + 'px',
        height: '100%'
      };

      var contentBoxStyle = {
        width: width + 'px',
        height: '100%'
      };

      var indicators = this.props.children.map(function (val, index) {
        return _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.onClickIndicator(index);
            }, key: index },
          _react2.default.createElement('div', { className: (0, _classnames2.default)('walkthrough-dot', { 'selected': page === index }) })
        );
      });

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('walkthrough', this.props.className) },
        _react2.default.createElement(
          'div',
          { className: 'walkthrough-backdrop' },
          _react2.default.createElement(
            'div',
            { className: 'walkthrough-modal', style: modalStyle },
            _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)('walkthrough-container', { 'animated': this.props.animated }), style: containerStyle },
              this.props.children.map(function (val, index) {
                return _react2.default.createElement(
                  'div',
                  { className: 'walkthrough-content-box', style: contentBoxStyle, key: index },
                  val
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'walkthrough-footer' },
              _react2.default.createElement(
                'button',
                {
                  className: (0, _classnames2.default)('btn-footer', 'btn-back', { 'first-page': page === 0 }),
                  onClick: this.onClickBack },
                this.props.backBtnTitle
              ),
              _react2.default.createElement(
                'div',
                { className: 'walkthrough-page-indicator' },
                indicators
              ),
              _react2.default.createElement(
                'button',
                {
                  className: 'btn-footer btn-next',
                  onClick: this.onClickNext },
                page < amount - 1 ? _react2.default.createElement(
                  'span',
                  null,
                  this.props.nextBtnTitle
                ) : _react2.default.createElement(
                  'span',
                  null,
                  this.props.closeBtnTitle
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Walkthrough;
}(_react2.default.Component);

exports.default = Walkthrough;

var WalkthroughContent = exports.WalkthroughContent = function (_React$Component2) {
  _inherits(WalkthroughContent, _React$Component2);

  function WalkthroughContent() {
    _classCallCheck(this, WalkthroughContent);

    return _possibleConstructorReturn(this, (WalkthroughContent.__proto__ || Object.getPrototypeOf(WalkthroughContent)).apply(this, arguments));
  }

  _createClass(WalkthroughContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('walkthrough-content', this.props.className) },
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _propTypes2.default.string
      };
    }
  }]);

  return WalkthroughContent;
}(_react2.default.Component);

Walkthrough.Content = WalkthroughContent;