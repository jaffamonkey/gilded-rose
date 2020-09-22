'use strict';

describe('AgedBrie', function () {
  describe('#itemTomorrow', function () {
    it('increases quality value by 1', function () {
      let testBrie = new AgedBrie('brie', 1, 1);
      expect(testBrie.itemTomorrow().quality).toEqual(2);
    });
    it('quality value maximum of 50', function () {
      let testBrie = new AgedBrie('brie', 3, 50);
      expect(testBrie.itemTomorrow().quality).toEqual(50);
    });
    describe('sellIn value is 0 or less', function () {
      it('increases quality by 2', function () {
        let testBrie = new AgedBrie('brie', 0, 1);
        expect(testBrie.itemTomorrow().quality).toEqual(3);
      });
    });
    describe('given that the sellIn value is less than 0', function () {
      it('increases quality by 2', function () {
        let testBrie = new AgedBrie('brie', -1, 1);
        expect(testBrie.itemTomorrow().quality).toEqual(3);
      });
    });
  });
});
