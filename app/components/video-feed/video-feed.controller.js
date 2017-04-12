(function () {
    'use strict';

    class VideoFeedCtrl {
        constructor ( VideoFeedService ) {
            this.items = [];
            this.service = VideoFeedService;

            this.errState = {
                active: false,
                msg: 'Sorry, something went wrong... =)'
            };
        }

        $onInit () {
            this.service.getItems().then(
                res => {
                    this.items = res.data.items;
                }
            ).catch(
                err => this.errState.active = true
            )

        }
    }

    VideoFeedCtrl.$inject = ['VideoFeedService'];

    angular.module('pbVideoFeed')
        .controller('VideoFeedCtrl', VideoFeedCtrl);
})();