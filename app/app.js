var app = angular.module(
    'pb-test-app',
    [
        'pbEmbedVideo',
        'pbVideoFeed',
        'pbVideoFeedItem',
        'pbUtils'
    ]
).name;

angular.bootstrap(
    document.getElementById('app'),
    [app]
);