import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата: DS.attr('date'),
  расходПриход: DS.attr('i-i-s-gotovoe-prilozhenie-расход-приход'),
  сумма: DS.attr('decimal'),
  тип: DS.attr('i-i-s-gotovoe-prilozhenie-тип'),
  клиенты: DS.belongsTo('i-i-s-gotovoe-prilozhenie-клиенты', { inverse: null, async: false }),
  финансисты: DS.belongsTo('i-i-s-gotovoe-prilozhenie-финансисты', { inverse: null, async: false }),
  переченьУслуг: DS.hasMany('i-i-s-gotovoe-prilozhenie-перечень-услуг', { inverse: 'приходДенег', async: false }),
  переченьТоваров: DS.hasMany('i-i-s-gotovoe-prilozhenie-перечень-товаров', { inverse: 'приходДенег', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  расходПриход: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.расходПриход.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  финансисты: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.финансисты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьУслуг: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.переченьУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  переченьТоваров: {
    descriptionKey: 'models.i-i-s-gotovoe-prilozhenie-приход-денег.validations.переченьТоваров.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриходДенегE', 'i-i-s-gotovoe-prilozhenie-приход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    расходПриход: attr('Расход/приход', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    сумма: attr('Сумма', { index: 4 }),
    финансисты: belongsTo('i-i-s-gotovoe-prilozhenie-финансисты', 'Финансисты', {
      фИО: attr('ФИО финансиста', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    клиенты: belongsTo('i-i-s-gotovoe-prilozhenie-клиенты', 'Клиенты', {
      фИО: attr('ФИО клиента', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' }),
    переченьУслуг: hasMany('i-i-s-gotovoe-prilozhenie-перечень-услуг', 'Перечень услуг', {
      услуги: belongsTo('i-i-s-gotovoe-prilozhenie-услуги', 'Услуги', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    }),
    переченьТоваров: hasMany('i-i-s-gotovoe-prilozhenie-перечень-товаров', 'Перечень товаров', {
      товары: belongsTo('i-i-s-gotovoe-prilozhenie-товары', 'Товары', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ПриходДенегL', 'i-i-s-gotovoe-prilozhenie-приход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    расходПриход: attr('Расход/приход', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    сумма: attr('Сумма', { index: 4 }),
    финансисты: belongsTo('i-i-s-gotovoe-prilozhenie-финансисты', 'ФИО финансиста', {
      фИО: attr('ФИО финансиста', { index: 5 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-gotovoe-prilozhenie-клиенты', 'ФИО клиента', {
      фИО: attr('ФИО клиента', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
