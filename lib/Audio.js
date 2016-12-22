(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'mola', 'classnames', './constants', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('mola'), require('classnames'), require('./constants'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.mola, global.classnames, global.constants, global.babelHelpers);
        global.Audio = mod.exports;
    }
})(this, function (exports, _react, _mola, _classnames, _constants, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Audio = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    /**
     * @file 音频组件
     * @author cxtom <cxtom2008@gmail.com>
     */

    var audioPool = [];

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
            audioPool.push(this.refs.audio);
            if (this.props.playImage) {
                var preLoadImage = new Image();
                preLoadImage.src = this.props.playImage;
            }
        };

        Audio.prototype.componentWillUnmount = function componentWillUnmount() {
            var index = audioPool.indexOf(this.refs.audio);
            if (index > -1) {
                audioPool = audioPool.splice(index, 1);
            }
        };

        Audio.prototype.onPlay = function onPlay() {
            var _this2 = this;

            this.setState({ playing: true });
            audioPool.forEach(function (audio) {
                if (audio !== _this2.refs.audio) {
                    audio.pause();
                }
            });
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
                autoPlay = _props.autoPlay,
                title = _props.title;


            var playing = this.state.playing;

            return _react2['default'].createElement(
                'div',
                {
                    onClick: this.onClick,
                    className: (0, _classnames2['default'])('mola-audio', className, { 'state-playing': playing }),
                    'data-type': 'btn',
                    'data-click': '{"mod": "audio", "act": "b_' + (playing ? 'pause' : 'play') + '"}',
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
                    onPlay: this.onPlay,
                    onPause: this.onPause,
                    onEnded: this.onPause,
                    title: title,
                    ref: 'audio' })
            );
        };

        return Audio;
    }(_react.Component);

    Audio.displayName = _constants.type;

    Audio.propTypes = {
        top: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
        left: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
        width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
        height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
        src: _react.PropTypes.string.isRequired,
        image: _react.PropTypes.string.isRequired,
        playImage: _react.PropTypes.string,
        autoPlay: _react.PropTypes.bool.isRequired,
        title: _react.PropTypes.string
    };

    Audio.defaultProps = {
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        autoPlay: false
    };

    exports['default'] = (0, _mola.registerComponent)(_constants.type, _constants.level)(Audio);
});
//# sourceMappingURL=Audio.js.map
