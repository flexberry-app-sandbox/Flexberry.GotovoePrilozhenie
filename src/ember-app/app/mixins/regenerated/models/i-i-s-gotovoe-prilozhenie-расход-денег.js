import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банк: DS.attr('i-i-s-gotovoe-prilozhenie-банк'),
  бИК: DS.attr('number'),
  дата: DS.attr('date'),
  иНН: DS.attr('number'),
  расходПриход: DS.attr('i-i-s-gotovoe-prilozhenie-расход-приход'),
  сумма: DS.attr('decimal'),
  счет: DS.attr('number'),
  тип: DS.attr('i-i-s-gotovoe-prilozhenie-тип'),
  поставщики: DS.belongsTo('i-i-s-gotovoe-prilozhenie-поставщики', { inverse: null, async: false }),
  финансисты: DS.belongsTo('i-i-s-gotovoe-prilozhenie-финансисты', { inverse: null, async: false }),
  переченьМат: DS.hasMany('i-i-s-gotovoe-prilozhenie-перечень-мат', { inverse: 'расходДенег', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банк: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.банк.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  бИК: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.бИК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расходПриход: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.расходПриход.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  счет: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.счет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  поставщики: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.поставщики.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  финансисты: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.финансисты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьМат: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-расход-денег.validations.переченьМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасходДенегE', 'i-i-s-gotovoe-prilozhenie-расход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    банк: attr('Банк', { index: 2 }),
    счет: attr('Счет', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    бИК: attr('БИК', { index: 5 }),
    расходПриход: attr('Расход/приход', { index: 6 }),
    тип: attr('Тип', { index: 7 }),
    сумма: attr('Сумма', { index: 8 }),
    финансисты: belongsTo('i-i-s-gotovoe-prilozhenie-финансисты', 'Финансисты', {
      фИО: attr('ФИО финансиста', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'фИО' }),
    поставщики: belongsTo('i-i-s-gotovoe-prilozhenie-поставщики', 'Поставщики', {
      наименование: attr('Поставщик', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'наименование' }),
    переченьМат: hasMany('i-i-s-gotovoe-prilozhenie-перечень-мат', 'Перечень материалов', {
      материалы: belongsTo('i-i-s-gotovoe-prilozhenie-материалы', 'Материалы', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('РасходДенегL', 'i-i-s-gotovoe-prilozhenie-расход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    банк: attr('Банк', { index: 2 }),
    счет: attr('Счет', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    бИК: attr('БИК', { index: 5 }),
    расходПриход: attr('Расход/приход', { index: 6 }),
    тип: attr('Тип', { index: 7 }),
    сумма: attr('Сумма', { index: 8 }),
    финансисты: belongsTo('i-i-s-gotovoe-prilozhenie-финансисты', 'ФИО финансиста', {
      фИО: attr('ФИО финансиста', { index: 9 })
    }, { index: -1, hidden: true }),
    поставщики: belongsTo('i-i-s-gotovoe-prilozhenie-поставщики', 'Поставщик', {
      наименование: attr('Поставщик', { index: 10 })
    }, { index: -1, hidden: true })
  });
};
