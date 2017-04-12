var app = angular.module(
    'pb-test-app',
    [
        'pbVideoFeed',
        'pbVideoFeedItem',
        'pbUtils'
    ]
).name;

angular.bootstrap(
    document.getElementById('app'),
    [app]
);