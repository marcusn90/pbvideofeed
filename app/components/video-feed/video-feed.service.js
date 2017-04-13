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
    }

    VideoFeedService.$inject = ['$http', 'VideoFeedCfg'];

    angular.module('pbVideoFeed')
        .service(
            'VideoFeedService',
            VideoFeedService
        );
})();