import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gotovoe-prilozhenie-услуги', 'Unit | Serializer | i-i-s-gotovoe-prilozhenie-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gotovoe-prilozhenie-услуги',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-gotovoe-prilozhenie-банк',
    'transform:i-i-s-gotovoe-prilozhenie-единицы',
    'transform:i-i-s-gotovoe-prilozhenie-расход-приход',
    'transform:i-i-s-gotovoe-prilozhenie-тип',

    'model:i-i-s-gotovoe-prilozhenie-клиенты',
    'model:i-i-s-gotovoe-prilozhenie-материалы',
    'model:i-i-s-gotovoe-prilozhenie-перечень-мат',
    'model:i-i-s-gotovoe-prilozhenie-перечень-товаров',
    'model:i-i-s-gotovoe-prilozhenie-перечень-услуг',
    'model:i-i-s-gotovoe-prilozhenie-поставщики',
    'model:i-i-s-gotovoe-prilozhenie-приход-денег',
    'model:i-i-s-gotovoe-prilozhenie-расход-денег',
    'model:i-i-s-gotovoe-prilozhenie-регистр-оборот',
    'model:i-i-s-gotovoe-prilozhenie-состав-товара',
    'model:i-i-s-gotovoe-prilozhenie-товары',
    'model:i-i-s-gotovoe-prilozhenie-услуги',
    'model:i-i-s-gotovoe-prilozhenie-финансисты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
