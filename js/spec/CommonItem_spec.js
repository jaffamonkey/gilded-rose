'use strict';

describe('CommonItem', function () {
  describe('#itemTomorrow', function () {
    it('sellIn value reduces by 1', function () {
      let testItem = new CommonItem('apple', 3, 0);
      expect(testItem.itemTomorrow().sellIn).toEqual(2);
    });
    it('reduces quality value to a minimum of 0', function () {
      let testItem = new CommonItem('apple', 3, 0);
      expect(testItem.itemTomorrow().quality).toEqual(0);
    });
    describe('sellIn value is greater than 0', function () {
      it('reduces quality value by 1', function () {
        let testItem = new CommonItem('apple', 3, 3);
        expect(testItem.itemTomorrow().sellIn).toEqual(2);
      });
    });
    describe('sellIn value is 0', function () {
      it('increases quality value by 2', function () {
        let testItem = new CommonItem('apple', 0, 3);
        expect(testItem.itemTomorrow().quality).toEqual(1);
      });
    });
    describe('sellIn value is less than 0', function () {
      it('increases quality value by 2', function () {
        let testItem = new CommonItem('apple', -1, 3);
        expect(testItem.itemTomorrow().quality).toEqual(1);
      });
    });
  });
});
