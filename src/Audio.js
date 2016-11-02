/**
 * @file 音频组件
 * @author cxtom <cxtom2008@gmail.com>
 */

import React, {Component, PropTypes} from 'react';

import {
    registerComponent,
    MOLA_COMPONENT_LEVEL_ATOM,
    px2rem
} from 'mola';

import cx from 'classnames';
import domUtil from 'melon/common/util/dom';

export const type = 'Audio';
export const level = MOLA_COMPONENT_LEVEL_ATOM;

export class Audio extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            playing: false
        };
        this.onClick = this.onClick.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onPause = this.onPause.bind(this);
    }

    componentDidMount() {
        domUtil.on(this.refs.audio, 'play', this.onPlay);
        domUtil.on(this.refs.audio, 'pause', this.onPause);
        domUtil.on(this.refs.audio, 'ended', this.onPause);

        if (this.props.playImage) {
            const preLoadImage = new Image();
            preLoadImage.src = this.props.playImage;
        }
    }

    componentWillUnmount() {
        domUtil.off(this.refs.audio, 'play', this.onPlay);
        domUtil.off(this.refs.audio, 'pause', this.onPause);
        domUtil.off(this.refs.audio, 'ended', this.onPause);
    }

    onPlay() {
        this.setState({playing: true});
    }

    onPause() {
        this.setState({playing: false});
    }

    onClick() {
        const audio = this.refs.audio;
        audio[this.state.playing ? 'pause' : 'play']();
    }

    render() {

        let {
            className = null,
            style = null,
            top,
            left,
            width,
            height,
            image,
            playImage,
            src,
            autoPlay
        } = this.props;

        const playing = this.state.playing;

        return (
            <div
                onClick={this.onClick}
                className={cx('mola-audio', className, {'state-playing': playing})}
                data-type="btn"
                data-click={`{"act": "b_${playing ? 'pause' : 'play'}"}`}
                style={{
                    ...style,
                    top: px2rem(top),
                    left: px2rem(left),
                    width: px2rem(width),
                    height: px2rem(height),
                    backgroundImage: `url(${playing && playImage ? playImage : image})`
                }}>
                <audio
                    src={src}
                    autoBuffer
                    autoPlay={autoPlay}
                    ref="audio" />
            </div>
        );
    }

}

Audio.displayName = type;

Audio.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    playImage: PropTypes.string,
    autoPlay: PropTypes.bool.isRequired
};

Audio.defaultProps = {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    autoPlay: false
};

export default registerComponent(type, level)(Audio);
