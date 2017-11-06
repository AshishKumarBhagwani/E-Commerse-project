'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _sideBar = require('../components/shared/side-bar');

var _sideBar2 = _interopRequireDefault(_sideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\MERN Stack\\E-commerse project\\pages\\main.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { user: [] };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _axios2.default.get('/getuser').then(function (response) {
                _this2.setState({ user: response.data });
            });
            var currentdate = new Date();
            console.log();
            this.hours = currentdate.getUTCHours();
            this.minutes = currentdate.getUTCMinutes();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('main', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, this.hours, ':', this.minutes, _react2.default.createElement(_sideBar2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Wellcome to E-commerse site'), _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Welcome'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Username: ', this.state.user.username), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Click here to ', _react2.default.createElement(_link2.default, { href: '/logout', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Logout'))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtYWluLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImF4aW9zIiwiU2lkZWJhciIsInByb3BzIiwic3RhdGUiLCJ1c2VyIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJkYXRhIiwiY3VycmVudGRhdGUiLCJEYXRlIiwiY29uc29sZSIsImxvZyIsImhvdXJzIiwiZ2V0VVRDSG91cnMiLCJtaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsInVzZXJuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7Ozs7Ozs7OztvQ0FHaEI7O29CQUFBLEFBQVksT0FBTTs0Q0FBQTs7MElBQUEsQUFDUixBQUNOOztjQUFBLEFBQUssUUFBUSxFQUFDLE1BRkEsQUFFZCxBQUFhLEFBQU07ZUFDdEI7Ozs7OzRDQUVrQjt5QkFDZjs7NEJBQUEsQUFBTSxJQUFOLEFBQVUsWUFBVixBQUFzQixLQUFLLFVBQUEsQUFBQyxVQUFXLEFBQ25DO3VCQUFBLEFBQUssU0FBUyxFQUFDLE1BQUssU0FBcEIsQUFBYyxBQUFlLEFBQ2hDO0FBRkQsQUFHQTtnQkFBSSxjQUFjLElBQWxCLEFBQWtCLEFBQUksQUFDdEI7b0JBQUEsQUFBUSxBQUNSO2lCQUFBLEFBQUssUUFBUSxZQUFiLEFBQWEsQUFBWSxBQUN4QjtpQkFBQSxBQUFLLFVBQVUsWUFBZixBQUFlLEFBQVksQUFDL0I7Ozs7aUNBRU8sQUFDSjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxhQUFBLE9BQUEsQUFDVSxPQUFRLFVBRGxCLEFBQ3VCLEFBRWpCLHlCQUFBLEFBQUM7OzhCQUFEO2dDQUhOLEFBR00sQUFDRjtBQURFO0FBQUEsZ0NBQ0YsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLGdEQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFBYyw0QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBYyxtQkFBQSxBQUFLLE1BQUwsQUFBVyxLQUwzQyxBQUtrQixBQUE4QixBQUM1QywyQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBaUIsa0NBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQWE7OEJBQWI7Z0NBQUEsQUFBd0I7QUFBeEI7K0JBQXdCLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVBqRCxBQUNJLEFBTUksQUFBaUIsQUFBd0IsQUFHcEQ7Ozs7O0VBM0J3QixnQkFBTSxBIiwiZmlsZSI6Im1haW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovTUVSTiBTdGFjay9FLWNvbW1lcnNlIHByb2plY3QifQ==