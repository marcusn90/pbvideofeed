describe('Video Feed: ', () => {
  
  describe('Video Feed Service: ', () => {
      let VideoFeedService, VideoFeedCfg;

      beforeEach(angular.mock.module('pbVideoFeed'));

      beforeEach(inject(
          (_VideoFeedService_, _VideoFeedCfg_) => {
              VideoFeedService = _VideoFeedService_;
              VideoFeedCfg = _VideoFeedCfg_;
          }
      ));
      
      it(
          'should be defined',
          () => {
              expect(VideoFeedService).toBeDefined();
          }
      );

      it(
          'should define getItems()',
          () => {
              expect(typeof VideoFeedService.getItems).toBe('function')
          }
      );
  });

});