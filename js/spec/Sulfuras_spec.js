'use strict';

describe('Sulfuras', function () {
  describe('#itemTomorrow', function () {
    let testSulfuras = new Sulfuras('sulfuras', 1, 80);

    it('sellIn value does not reduce', function () {
      expect(testSulfuras.itemTomorrow().sellIn).toEqual(1);
    });
    it("quality value does not increase", function () {
      expect(testSulfuras.itemTomorrow().quality).toEqual(80);
    });
  });
});
