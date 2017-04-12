(function () {
    'use strict';

    class VideoFeedService {
        constructor ( $http, VideoFeedCfg ) {
            this.$http = $http;
            this.cfg = VideoFeedCfg;
        }

        getItems () {
            return this.$http.get(this.cfg.ITEMS_URL);
        }

        getItemVideoUrl ( itemData = {} ) {
            switch ( itemData.source ) {
                case this.cfg.SOURCE_URL:
                    return itemData.url;
                case this.cfg.SOURCE_YOUTUBE:
                    return `https://www.youtube.com/embed/${itemData.videoId}`;
                case this.cfg.SOURCE_FACEBOOK:
                    return [
                        'https://www.facebook.com/plugins/video.php?href=',
                        encodeURIComponent(`https://www.facebook.com/facebook/videos/${itemData.videoId}/`),
                        '&show_text=false&width=600&height=200'
                    ].join('');
                default:
                    return '';
            }
        }
    }

    VideoFeedService.$inject = ['$http', 'VideoFeedCfg'];

    angular.module('pbVideoFeed')
        .service(
            'VideoFeedService',
            VideoFeedService
        );
})();