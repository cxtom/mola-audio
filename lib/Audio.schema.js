(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Audio'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Audio'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Audio);
        global.AudioSchema = mod.exports;
    }
})(this, function (exports, _Audio) {
    'use strict';

    exports.__esModule = true;
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _Audio.type;
        }
    });
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _Audio.level;
        }
    });
    var editorProps = exports.editorProps = {
        movable: true,
        resizable: 'both',
        droppable: false,
        selectable: true
    };

    exports['default'] = {
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
            autoPlay: {
                'title': '是否自动播放 (浏览器支持时)',
                'type': 'boolean',
                'default': false
            }
        },
        required: ['top', 'left', 'width', 'height', 'image', 'src', 'autoPlay']
    };
});
//# sourceMappingURL=Audio.schema.js.map
