(function () {
    'use strict';

    class EmbedFacebookCtrl {
        constructor ( $sce ) {
            this.$sce = $sce;
        }
        
        getSrc () {
            const src = [
                'https://www.facebook.com/plugins/video.php?href=',
                encodeURIComponent(`https://www.facebook.com/facebook/videos/${this.videoData.videoId}/`),
                '&show_text=false&width=560'
            ].join('');

            return this.$sce.trustAsResourceUrl(src);
        }
    }
    EmbedFacebookCtrl.$inject = ['$sce'];

    angular.module('pbEmbedVideo')
        .controller('EmbedFacebookCtrl', EmbedFacebookCtrl);
})();