import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  материалы: DS.belongsTo('i-i-s-gotovoe-prilozhenie-материалы', { inverse: null, async: false }),
  расходДенег: DS.belongsTo('i-i-s-gotovoe-prilozhenie-расход-денег', { inverse: 'переченьМат', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-перечень-мат.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-перечень-мат.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходДенег: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-перечень-мат.validations.расходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПереченьМатE', 'i-i-s-gotovoe-prilozhenie-перечень-мат', {
    материалы: belongsTo('i-i-s-gotovoe-prilozhenie-материалы', 'Материалы', {
      наименование: attr('Наименование', { index: 1, hidden: true }),
      стоимость: attr('Стоимость', { index: 3 })
    }, { index: 0, displayMemberPath: 'наименование' }),
    количество: attr('Количество', { index: 2 })
  });
};
