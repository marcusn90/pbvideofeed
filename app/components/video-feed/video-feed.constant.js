(function () {
    'use strict';

    const VideoFeedCfg = {
        ITEMS_URL: 'https://cdn.playbuzz.com/content/feed/items',

        SOURCE_URL: 'url',
        SOURCE_YOUTUBE: 'youtube',
        SOURCE_FACEBOOK: 'facebook'
    };

    angular.module('pbVideoFeed')
        .constant(
            'VideoFeedCfg',
            VideoFeedCfg
        );
})();