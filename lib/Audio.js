(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'mola', 'classnames', 'melon/common/util/dom', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('mola'), require('classnames'), require('melon/common/util/dom'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.mola, global.classnames, global.dom, global.babelHelpers);
        global.Audio = mod.exports;
    }
})(this, function (exports, _react, _mola, _classnames, _dom, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Audio = exports.level = exports.type = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var _dom2 = babelHelpers.interopRequireDefault(_dom);

    /**
     * @file 音频组件
     * @author cxtom <cxtom2008@gmail.com>
     */

    var type = exports.type = 'Audio';
    var level = exports.level = _mola.MOLA_COMPONENT_LEVEL_ATOM;

    var Audio = exports.Audio = function (_Component) {
        babelHelpers.inherits(Audio, _Component);

        function Audio() {
            babelHelpers.classCallCheck(this, Audio);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

            _this.state = {
                playing: false
            };
            _this.onClick = _this.onClick.bind(_this);
            _this.onPlay = _this.onPlay.bind(_this);
            _this.onPause = _this.onPause.bind(_this);
            return _this;
        }

        Audio.prototype.componentDidMount = function componentDidMount() {
            _dom2['default'].on(this.refs.audio, 'play', this.onPlay);
            _dom2['default'].on(this.refs.audio, 'pause', this.onPause);
            _dom2['default'].on(this.refs.audio, 'ended', this.onPause);

            if (this.props.playImage) {
                var preLoadImage = new Image();
                preLoadImage.src = this.props.playImage;
            }
        };

        Audio.prototype.componentWillUnmount = function componentWillUnmount() {
            _dom2['default'].off(this.refs.audio, 'play', this.onPlay);
            _dom2['default'].off(this.refs.audio, 'pause', this.onPause);
            _dom2['default'].off(this.refs.audio, 'ended', this.onPause);
        };

        Audio.prototype.onPlay = function onPlay() {
            this.setState({ playing: true });
        };

        Audio.prototype.onPause = function onPause() {
            this.setState({ playing: false });
        };

        Audio.prototype.onClick = function onClick() {
            var audio = this.refs.audio;
            audio[this.state.playing ? 'pause' : 'play']();
        };

        Audio.prototype.render = function render() {
            var _props = this.props,
                _props$className = _props.className,
                className = _props$className === undefined ? null : _props$className,
                _props$style = _props.style,
                style = _props$style === undefined ? null : _props$style,
                top = _props.top,
                left = _props.left,
                width = _props.width,
                height = _props.height,
                image = _props.image,
                playImage = _props.playImage,
                src = _props.src,
                autoPlay = _props.autoPlay;


            var playing = this.state.playing;

            return _react2['default'].createElement(
                'div',
                {
                    onClick: this.onClick,
                    className: (0, _classnames2['default'])('mola-audio', className, { 'state-playing': playing }),
                    'data-click': '{"act": "b_' + (playing ? 'pause' : 'play') + '"}',
                    style: babelHelpers['extends']({}, style, {
                        top: (0, _mola.px2rem)(top),
                        left: (0, _mola.px2rem)(left),
                        width: (0, _mola.px2rem)(width),
                        height: (0, _mola.px2rem)(height),
                        backgroundImage: 'url(' + (playing && playImage ? playImage : image) + ')'
                    }) },
                _react2['default'].createElement('audio', {
                    src: src,
                    autoBuffer: true,
                    autoPlay: autoPlay,
                    ref: 'audio' })
            );
        };

        return Audio;
    }(_react.Component);

    Audio.displayName = type;

    Audio.propTypes = {
        top: _react.PropTypes.number.isRequired,
        left: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired,
        src: _react.PropTypes.string.isRequired,
        image: _react.PropTypes.string.isRequired,
        playImage: _react.PropTypes.string,
        autoPlay: _react.PropTypes.bool.isRequired
    };

    Audio.defaultProps = {
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        autoPlay: false
    };

    exports['default'] = (0, _mola.registerComponent)(type, level)(Audio);
});
//# sourceMappingURL=Audio.js.map
