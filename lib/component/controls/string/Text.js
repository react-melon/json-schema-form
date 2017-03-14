(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../../../factory', 'melon-core/util/shallowEqual', 'melon/TextBox', '../../ValidityLabel', '../../../util/createStateClassName'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../../../factory'), require('melon-core/util/shallowEqual'), require('melon/TextBox'), require('../../ValidityLabel'), require('../../../util/createStateClassName'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.shallowEqual, global.TextBox, global.ValidityLabel, global.createStateClassName);
        global.Text = mod.exports;
    }
})(this, function (exports, _react, _factory, _shallowEqual, _TextBox, _ValidityLabel, _createStateClassName) {
    'use strict';

    exports.__esModule = true;

    var _react2 = _interopRequireDefault(_react);

    var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

    var _TextBox2 = _interopRequireDefault(_TextBox);

    var _ValidityLabel2 = _interopRequireDefault(_ValidityLabel);

    var _createStateClassName2 = _interopRequireDefault(_createStateClassName);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var TextControl = function (_Component) {
        _inherits(TextControl, _Component);

        function TextControl() {
            _classCallCheck(this, TextControl);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

            _this.onFocus = _this.onFocus.bind(_this);
            _this.onBlur = _this.onBlur.bind(_this);
            _this.onChange = _this.onChange.bind(_this);
            return _this;
        }

        TextControl.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _shallowEqual2['default'])(nextProps, this.props);
        };

        TextControl.prototype.onFocus = function onFocus(e) {
            var _props = this.props,
                name = _props.name,
                actions = _props.actions;


            actions.focus(name, e);
        };

        TextControl.prototype.onBlur = function onBlur(e) {
            var _props2 = this.props,
                name = _props2.name,
                actions = _props2.actions;

            actions.blur(name);
        };

        TextControl.prototype.onChange = function onChange(e) {
            var _props3 = this.props,
                actions = _props3.actions,
                name = _props3.name;


            actions.change(name, e.target.value);
        };

        TextControl.prototype.render = function render() {
            var _props4 = this.props,
                schema = _props4.schema,
                value = _props4.value,
                name = _props4.name,
                meta = _props4.meta,
                disabled = _props4.disabled,
                readOnly = _props4.readOnly;
            var title = schema.title,
                description = schema.description,
                placeholder = schema.placeholder;
            var touched = meta.touched,
                error = meta.error,
                focus = meta.focus;


            var invalid = !focus && touched && error && error.message;

            var className = (0, _createStateClassName2['default'])('ui-control-text', this.props);

            return _react2['default'].createElement(
                'div',
                { className: className },
                title ? _react2['default'].createElement(
                    'header',
                    { className: 'ui-control-text-title' },
                    title
                ) : null,
                description ? _react2['default'].createElement(
                    'p',
                    { className: 'ui-control-text-description' },
                    description
                ) : null,
                _react2['default'].createElement(_TextBox2['default'], {
                    disabled: disabled,
                    readOnly: readOnly,
                    variants: ['fluid'],
                    states: { invalid: invalid },
                    size: 'xs',
                    placeholder: placeholder,
                    name: name,
                    value: value,
                    defaultValue: schema['default'],
                    onFocus: this.onFocus,
                    onChange: this.onChange,
                    onBlur: this.onBlur }),
                _react2['default'].createElement(_ValidityLabel2['default'], meta)
            );
        };

        return TextControl;
    }(_react.Component);

    exports['default'] = TextControl;


    (0, _factory.registerControl)(function (schema) {

        if (schema.type === 'string') {
            return TextControl;
        }
    });
});
//# sourceMappingURL=Text.js.map
