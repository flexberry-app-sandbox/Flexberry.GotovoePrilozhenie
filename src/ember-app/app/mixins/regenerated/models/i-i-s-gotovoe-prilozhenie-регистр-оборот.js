import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  приходДенег: DS.belongsTo('i-i-s-gotovoe-prilozhenie-приход-денег', { inverse: null, async: false }),
  расходДенег: DS.belongsTo('i-i-s-gotovoe-prilozhenie-расход-денег', { inverse: null, async: false })
});

export let ValidationRules = {
  приходДенег: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-регистр-оборот.validations.приходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходДенег: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-регистр-оборот.validations.расходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрОборотE', 'i-i-s-gotovoe-prilozhenie-регистр-оборот', {
    приходДенег: belongsTo('i-i-s-gotovoe-prilozhenie-приход-денег', 'Приход денег', {
      iD: attr('ID', { index: 1, hidden: true }),
      дата: attr('Дата', { index: 2 }),
      расходПриход: attr('Расход/приход', { index: 3 }),
      тип: attr('Тип', { index: 4 }),
      сумма: attr('Сумма', { index: 5 })
    }, { index: 0, displayMemberPath: 'iD' }),
    расходДенег: belongsTo('i-i-s-gotovoe-prilozhenie-расход-денег', 'Расход денег', {
      iD: attr('ID', { index: 7, hidden: true }),
      дата: attr('Дата', { index: 8 }),
      расходПриход: attr('Расход/приход', { index: 9 }),
      тип: attr('Тип', { index: 10 }),
      сумма: attr('Сумма', { index: 11 })
    }, { index: 6, displayMemberPath: 'iD' })
  });

  modelClass.defineProjection('РегистрОборотL', 'i-i-s-gotovoe-prilozhenie-регистр-оборот', {
    приходДенег: belongsTo('i-i-s-gotovoe-prilozhenie-приход-денег', 'ID', {
      iD: attr('ID', { index: 0 }),
      дата: attr('Дата', { index: 1 }),
      расходПриход: attr('Расход/приход', { index: 2 }),
      тип: attr('Тип', { index: 3 }),
      сумма: attr('Сумма', { index: 4 })
    }, { index: -1, hidden: true }),
    расходДенег: belongsTo('i-i-s-gotovoe-prilozhenie-расход-денег', 'ID', {
      iD: attr('ID', { index: 5 }),
      дата: attr('Дата', { index: 6 }),
      расходПриход: attr('Расход/приход', { index: 7 }),
      тип: attr('Тип', { index: 8 }),
      сумма: attr('Сумма', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
