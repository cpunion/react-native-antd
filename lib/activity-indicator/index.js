'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RNActivityIndicator = function (_React$Component) {
    (0, _inherits3['default'])(RNActivityIndicator, _React$Component);

    function RNActivityIndicator() {
        (0, _classCallCheck3['default'])(this, RNActivityIndicator);
        return (0, _possibleConstructorReturn3['default'])(this, (RNActivityIndicator.__proto__ || Object.getPrototypeOf(RNActivityIndicator)).apply(this, arguments));
    }

    (0, _createClass3['default'])(RNActivityIndicator, [{
        key: '_renderToast',
        value: function _renderToast() {
            var styles = this.props.styles;
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.container] },
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.innerContainer, { height: 89 }] },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.wrapper] },
                        _react2['default'].createElement(_reactNative.ActivityIndicator, { color: 'white', size: 'large' }),
                        this.props.text && _react2['default'].createElement(
                            _reactNative.Text,
                            { style: [styles.toast] },
                            this.props.text
                        )
                    )
                )
            );
        }
    }, {
        key: '_renderSpinner',
        value: function _renderSpinner() {
            return _react2['default'].createElement(
                _reactNative.View,
                { style: this.props.styles.spinner },
                _react2['default'].createElement(_reactNative.ActivityIndicator, { color: this.props.color, size: this.props.size }),
                this.props.text && _react2['default'].createElement(
                    _reactNative.Text,
                    { style: [this.props.styles.tip] },
                    this.props.text
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.animating) {
                return this.props.toast ? this._renderToast() : this._renderSpinner();
            }
            return null;
        }
    }]);
    return RNActivityIndicator;
}(_react2['default'].Component);

exports['default'] = RNActivityIndicator;

RNActivityIndicator.defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false,
    styles: _style2['default']
};
module.exports = exports['default'];