/**
 * @file Audio example
 * @author cxtom <cxtom2008@gamil.com>
 */

import React from 'react';
import Audio from '../src/Audio.js';
import ReactDOM from 'react-dom';

import {getRootFontSize} from 'mola';

import './index.styl';

document.getElementsByTagName('html')[0].style['font-size'] = getRootFontSize(document.documentElement.clientWidth) + 'px';

ReactDOM.render(
    <div>
        <Audio
            src="http://boscdn.bpc.baidu.com/mms-res/fFhO6RZSuUZLZWVI9UBi0mZ30UgS0cRIuWTi9VhRhmhwBVhw0WjMhwRenFvkrUgquWgquQXRfFSvrUCRBm8qZUjaBIs.mp3"
            image="http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/halloween/img/play.0cab139c.png"
            playImage="http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/halloween/img/stop.bc6afd6e.png"/>
        <Audio
            left="60rem"
            src="http://boscdn.bpc.baidu.com/mms-res/fFhO6RZSuUZLZWVI9UBi0mZ30UgS0cRIuWTi9VhRhmhwBVhw0WjMhwRenFvkrUgquWgquQXRfFSvrUCRBm8qZUjaBIs.mp3"
            image="http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/halloween/img/play.0cab139c.png"
            playImage="http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/halloween/img/stop.bc6afd6e.png"/>
    </div>,
    document.getElementById('app')
);
