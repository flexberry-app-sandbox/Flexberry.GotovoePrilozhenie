import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gotovoe-prilozhenie-финансисты', 'Unit | Model | i-i-s-gotovoe-prilozhenie-финансисты', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
