(function () {
    'use strict';

    const VideoFeedComponent = {
        bindings: {},
        templateUrl: 'app/components/video-feed/video-feed.html',
        controller: 'VideoFeedCtrl as vf'
    }

    angular.module('pbVideoFeed')
        .component(
            'pbVideoFeed',
            VideoFeedComponent
        );

    
})();