# Gilded Rose Test

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
// Tests to cover item states and methods
    |   |-- AgedBrie_spec.js
    |   |-- BackStagePass_spec.js
    |   |-- Shop_spec.js
    |   |-- CommonItem_spec.js
    |   |-- Sulfuras_spec.js
// Tests to cover new Conjured item
    |   |-- Conjured_spec.js
    |-- src
// Abstracted class for item constructor (fixture)
        |-- Item.js
// Abstracted class for quality update method
        |-- Shop.js
// Abstracted shared item properties class (extends Item class)
        |-- CommonItem.js
// Abstracted _calculateDepreciation for each item (extends CommomItem class)
        |-- AgedBrie.js
        |-- BackStagePass.js
        |-- Sulfuras.js
// Additional class for Conjured item
        |-- Conjured.js


```

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

I created 4 Item sub-classes, one for each Item type. Each class would extend the CommonItem parent class and inherit it's  properties. Having separate sub-classes  allows setting specific behaviors for the updateQuality method. For most items, `#_calculateDepreciation` determines the change in value, except 'Sulfuras', for which state never changes. When writing test cases for the new implementation, I added tests to cover all possible Item states, along with other testable methods. 
