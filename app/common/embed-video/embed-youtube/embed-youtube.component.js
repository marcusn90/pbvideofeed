(function () {
    'use strict';

    const EmbedYoutubeComponent = {
        bindings: {
            videoData: '<'
        },
        templateUrl: 'app/common/embed-video/embed-youtube/embed-youtube.html',
        controller: 'EmbedYoutubeCtrl as ey'
    }

    angular.module('pbEmbedVideo')
        .component(
            'pbEmbedYoutube',
            EmbedYoutubeComponent
        );

})();