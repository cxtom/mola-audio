/**
 * @file 音频组件
 * @author cxtom <cxtom2008@gmail.com>
 */

export {type, level} from './Audio';

export const editorProps = {
    movable: true,
    resizable: 'both',
    droppable: false,
    selectable: true
};

export default {
    type: 'object',
    properties: {
        top: {
            'title': 'top',
            'type': 'number',
            'default': 0
        },
        left: {
            'title': 'left',
            'type': 'number',
            'default': 0
        },
        width: {
            'title': '宽度',
            'type': 'number',
            'default': 50
        },
        height: {
            'title': '高度',
            'type': 'number',
            'default': 50
        },
        src: {
            title: '音频地址',
            type: 'string',
            format: 'uri'
        },
        image: {
            title: '停止时图片',
            type: 'string',
            format: 'uri',
            media: {
                type: 'image/*'
            }
        },
        playImage: {
            title: '播放时图片',
            type: 'string',
            format: 'uri',
            media: {
                type: 'image/*'
            }
        },
        title: {
            title: '音乐标题（锁屏后显示）',
            type: 'string'
        },
        autoPlay: {
            'title': '是否自动播放 (浏览器支持时)',
            'type': 'boolean',
            'default': false
        }
    },
    required: ['top', 'left', 'width', 'height', 'image', 'src', 'autoPlay']
};
