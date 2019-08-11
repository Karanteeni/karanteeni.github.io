'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_React$Component) {
    _inherits(Month, _React$Component);

    function Month(props) {
        _classCallCheck(this, Month);

        var _this = _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).call(this, props));

        _this.state = {
            month: _this.props.month, /* Aina pienellä esim. maaliskuu2019 */
            btntext: _this.props.btntext /* Normaalisti esim. Maaliskuu 2019 */
        };
        return _this;
    }

    _createClass(Month, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'card bg-transparent border-gold' },
                React.createElement(
                    'div',
                    { 'class': 'card-header', id: this.props.month + '_1' },
                    React.createElement(
                        'h5',
                        { 'class': 'mb-0' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-link', type: 'button', 'data-toggle': 'collapse', 'data-target': '#' + this.props.month, 'aria-expanded': 'false', 'aria-controls': this.props.month },
                            this.props.btntext
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return Month;
}(React.Component);

var Changebody = function (_React$Component2) {
    _inherits(Changebody, _React$Component2);

    function Changebody(props) {
        _classCallCheck(this, Changebody);

        var _this2 = _possibleConstructorReturn(this, (Changebody.__proto__ || Object.getPrototypeOf(Changebody)).call(this, props));

        _this2.state = {
            class: _this2.props.class,
            month: _this2.props.month
        };
        return _this2;
    }

    _createClass(Changebody, [{
        key: 'render',
        value: function render() {
            var showing = this.props.showing;
            if (showing) {
                return React.createElement(
                    'div',
                    { id: this.props.month, className: 'collapse show', 'aria-labelledby': this.props.month + '_1', 'data-parent': '#muutokset' },
                    React.createElement(
                        'div',
                        { className: 'card-body' },
                        this.props.children
                    )
                );
            }
            return React.createElement(
                'div',
                { id: this.props.month, className: 'collapse', 'aria-labelledby': this.props.month + '_1', 'data-parent': '#muutokset' },
                React.createElement(
                    'div',
                    { className: 'card-body' },
                    this.props.children
                )
            );
        }
    }]);

    return Changebody;
}(React.Component);

var ChangeDate = function (_React$Component3) {
    _inherits(ChangeDate, _React$Component3);

    function ChangeDate(props) {
        _classCallCheck(this, ChangeDate);

        var _this3 = _possibleConstructorReturn(this, (ChangeDate.__proto__ || Object.getPrototypeOf(ChangeDate)).call(this, props));

        _this3.state = {
            date: _this3.props.date /* Päivämäärä */
        };
        return _this3;
    }

    _createClass(ChangeDate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                this.props.date
            );
        }
    }]);

    return ChangeDate;
}(React.Component);

var Changelist = function (_React$Component4) {
    _inherits(Changelist, _React$Component4);

    function Changelist(props) {
        _classCallCheck(this, Changelist);

        var _this4 = _possibleConstructorReturn(this, (Changelist.__proto__ || Object.getPrototypeOf(Changelist)).call(this, props));

        _this4.state = {
            change: _this4.props.change
        };
        return _this4;
    }

    _createClass(Changelist, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                this.props.change
            );
        }
    }]);

    return Changelist;
}(React.Component);

var ChangeLog = function (_React$Component5) {
    _inherits(ChangeLog, _React$Component5);

    function ChangeLog() {
        _classCallCheck(this, ChangeLog);

        return _possibleConstructorReturn(this, (ChangeLog.__proto__ || Object.getPrototypeOf(ChangeLog)).apply(this, arguments));
    }

    _createClass(ChangeLog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'accordion text-left' },
                React.createElement(
                    Month,
                    { month: 'elokuu2019', btntext: 'Elokuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'elokuu2019', showing: true },
                        React.createElement(ChangeDate, { date: '11.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Uusi versio ja uudet kujeet. 1.14 on saapunut.' })
                        )
                    )
                )
            );
        }
    }]);

    return ChangeLog;
}(React.Component);

ReactDOM.render(React.createElement(ChangeLog, null), document.getElementById('muutokset'));