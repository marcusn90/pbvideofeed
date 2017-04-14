describe('Utils: ', () => {
  
  describe('Nums Filter: ', () => {
      let $filter;

      beforeEach(angular.mock.module('pbUtils'));

      beforeEach(inject(
          (_$filter_) => {
              $filter = _$filter_;
          }
      ));
      
      it(
          'should be defined',
          () => {
              let numsFilter = $filter('pbNums')
              expect(numsFilter).toBeDefined();
          }
      );

      it(
          'should format huge numbers ))',
          () => {
              let numsFilter = $filter('pbNums');

              expect(numsFilter(1234)).toEqual('1.2K');

              expect(numsFilter(1111111)).toEqual('1.1M');

              expect(numsFilter(56)).toEqual(56);
          }
      );

  });

});