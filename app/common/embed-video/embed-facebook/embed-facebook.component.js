(function () {
    'use strict';

    const EmbedFacebookComponent = {
        bindings: {
            videoData: '<'
        },
        templateUrl: 'app/common/embed-video/embed-facebook/embed-facebook.html',
        controller: 'EmbedFacebookCtrl as ef'
    }

    angular.module('pbEmbedVideo')
        .component(
            'pbEmbedFacebook',
            EmbedFacebookComponent
        );

})();