'use strict';

;(function (exports) {
  class CommonItem extends Item {
    itemTomorrow () {
      this.quality = this._qualityTomorrow();
      this.sellIn--;
      return this;
    }
    _qualityTomorrow () {
      let qualityTomorrow = this.quality - this._calculateDepreciation();
      if (qualityTomorrow < 0) return 0;
      if (qualityTomorrow >= 50) return 50;
      return qualityTomorrow;
    }
    _calculateDepreciation () {
      return this.sellIn <= 0 ? 2 : 1;
    }
  }
exports.CommonItem = CommonItem;
}(this));
