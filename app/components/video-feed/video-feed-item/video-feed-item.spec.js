describe('Video Feed Item: ', () => {
  
  describe('Video Feed Ctrl: ', () => {
      let $controller;

      beforeEach(angular.mock.module('pbVideoFeed'));
      beforeEach(angular.mock.module('pbVideoFeedItem'));

      beforeEach(inject(
          (_$controller_) => {
              $controller = _$controller_
          }
      ));
      
      it(
          'should be defined',
          () => {
              let $scope = {},
                ctrl = $controller('VideoFeedItemCtrl', { '$scope': $scope });

              expect(ctrl).toBeDefined();
          }
      );

      it(
          'should validate item using isValid()',
          () => {
              let $scope = {},
                ctrl = $controller('VideoFeedItemCtrl', { '$scope': $scope });

              expect(typeof ctrl.isValid).toBe('function');

              ctrl.item = {
                  title: 'title',
                  videoId: 11,
                  views: 33,
                  source: 'url'
              };

              expect(ctrl.isValid()).toBe(false);

              ctrl.item = {
                  title: 'title',
                  videoId: 11,
                  views: 33,
                  source: 'youtube'
              };

              expect(ctrl.isValid()).toBe(true);
          }
      );
  });

});