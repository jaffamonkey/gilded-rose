'use strict';

;(function (exports) {
  class AgedBrie extends CommonItem {
    _calculateDepreciation () {
      return this.sellIn <= 0 ? -2 : -1;
    }
  }
  exports.AgedBrie = AgedBrie;
}(this));
