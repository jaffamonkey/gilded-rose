# Gilded Rose Test

## Run tests

```
$ git clone git@github.com:jonsanders101/gilded-rose-js.git
$ cd gilded-rose-js
// Viewing the Item List_
$ open TexttestFixture.html
// Running the Test Suite_
$ open SpecRunner.html
```

## Notes on Approach

I created 4 Item sub-classes, one for each product type. Each class would extend the CommonItem parent class and inherit it's  properties. Having separate sub-classes  allows setting specific behaviors for the updateQuality method.

For most items, `#_calculateDepreciation` determines the change in value, except 'Sulfuras', whose state never changes.

When writing test cases for the new implementation, I checked the number of permutation for item property combinations and added spec tests for these, and also for the associated methods. 


## Directory structure
```
|-- gilded-rose-js
    |-- README.md
// Amended both these html files to include Conjured behavior tests
    |-- SpecRunner.html
    |-- TexttestFixture.html
// Unchanged lib structure/versions
    |-- lib
    |-- spec
    |   |-- AgedBrie_spec.js
    |   |-- BackStagePass_spec.js
// Tests for new Conjured item
    |   |-- Conjured_spec.js
    |   |-- Shop_spec.js
    |   |-- CommonItem_spec.js
    |   |-- Sulfuras_spec.js
    |-- src
        |-- AgedBrie.js
        |-- BackStagePass.js
// Additional class for Conjured item
        |-- Conjured.js
// Additional class for item constructor (fixture)
        |-- Item.js
// Additional class for item updates
        |-- Shop.js
// Abstracted shared item properties class (extends Item class)
        |-- CommonItem.js
        |-- Sulfuras.js
```
