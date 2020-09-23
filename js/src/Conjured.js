'use strict';

(function (exports) {
  class Conjured extends CommonItem {
    _calculateDepreciation () {
      return this.sellIn <= 0 ? 4 : 2;
    }
  }
  exports.Conjured = Conjured;
}(this))
