module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-mocks/angular-mocks.js',

        'app/components/video-feed/video-feed.module.js',
        'app/components/video-feed/video-feed.controller.js',
        'app/components/video-feed/video-feed.component.js',
        'app/components/video-feed/video-feed.service.js',
        'app/components/video-feed/video-feed.constant.js',

        'app/components/video-feed/video-feed-item/video-feed-item.module.js',
        'app/components/video-feed/video-feed-item/video-feed-item.controller.js',
        'app/components/video-feed/video-feed-item/video-feed-item.component.js',

        'app/utils/pbUtils.module.js',
        'app/utils/pbNums.filter.js',

        'app/components/video-feed/video-feed.spec.js',
        'app/components/video-feed/video-feed-item/video-feed-item.spec.js',
        'app/utils/pbUtils.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}