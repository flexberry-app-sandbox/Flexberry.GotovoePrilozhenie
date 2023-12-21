import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import БанкEnum from '../enums/i-i-s-gotovoe-prilozhenie-банк';

export default FlexberryEnum.extend({
  enum: БанкEnum,
  sourceType: 'IIS.Gotovoe_prilozhenie.Банк'
});
