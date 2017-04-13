(function () {
    'use strict';

    class EmbedYoutubeCtrl {
        constructor ( $sce ) {
            this.$sce = $sce;
        }
        
        getSrc () {
            return this.$sce.trustAsResourceUrl(`https://www.youtube.com/embed/${this.videoData.videoId}`);
        }
    }
    EmbedYoutubeCtrl.$inject = ['$sce'];

    angular.module('pbEmbedVideo')
        .controller('EmbedYoutubeCtrl', EmbedYoutubeCtrl);
})();