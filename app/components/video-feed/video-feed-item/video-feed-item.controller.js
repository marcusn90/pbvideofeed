(function () {
    'use strict';

    class VideoFeedItemCtrl {
        constructor ( VideoFeedService, VideoFeedCfg, $sce ) {
            this.service = VideoFeedService;
            this.cfg = VideoFeedCfg;
            this.$sce = $sce;
        }

        embedIframe () {
            let s = this.item.source,
                SY = this.cfg.SOURCE_YOUTUBE,
                SF = this.cfg.SOURCE_FACEBOOK;
                
            return s == SY || s == SF;
        }

        getVideoUrl () {
            let url = '';

            if ( this.item ) {
                url = this.$sce.trustAsResourceUrl(this.service.getItemVideoUrl(this.item));
            }

            return url;
        }
    }

    VideoFeedItemCtrl.$inject = ['VideoFeedService', 'VideoFeedCfg', '$sce'];


    angular.module('pbVideoFeedItem')
        .controller('VideoFeedItemCtrl', VideoFeedItemCtrl);
})();