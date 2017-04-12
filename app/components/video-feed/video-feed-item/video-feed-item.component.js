(function () {
    'use strict';

    const VideoFeedItemComponent = {
        bindings: {
            item: '<'
        },
        templateUrl: 'app/components/video-feed/video-feed-item/video-feed-item.html',
        controller: 'VideoFeedItemCtrl as vfi'
    }

    angular.module('pbVideoFeedItem')
        .component(
            'pbVideoFeedItem',
            VideoFeedItemComponent
        );

    
})();