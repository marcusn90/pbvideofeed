(function () {
    'use strict';

    class VideoFeedItemCtrl {
        constructor ( VideoFeedCfg ) {
            this.cfg = VideoFeedCfg;
            this.missingDataMsgs = {
                'youtube': 'Youtube video is missing',
                'facebook': 'Facebook video post is missing',
                'url': 'Video post is missing'
            };
        }

        isValid () {
            let title = this.item.title;

            if ( typeof title === 'undefined' || title == null || title.trim() === '' ) {
                return false;
            }

            let views = this.item.views;

            if ( typeof views === 'undefined' || views == null || !angular.isNumber(views) ) {
                return false;
            }

            let src = this.item.source;

            switch ( src ) {
                case this.cfg.SOURCE_YOUTUBE:
                case this.cfg.SOURCE_FACEBOOK:
                    if ( typeof this.item.videoId === 'undefined' ) {
                        return false;
                    }
                    break;
                case this.cfg.SOURCE_URL:
                    if ( typeof this.item.url === 'undefined' || this.item.url == null || this.item.url.trim() === '' ) {
                        return false;
                    }
            }
            
            return true;
        }

        getMissingDataMsg () {
            return this.missingDataMsgs[this.item.source];
        }
    }

    VideoFeedItemCtrl.$inject = ['VideoFeedCfg'];


    angular.module('pbVideoFeedItem')
        .controller('VideoFeedItemCtrl', VideoFeedItemCtrl);
})();