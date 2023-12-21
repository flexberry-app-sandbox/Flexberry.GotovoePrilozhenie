import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипEnum from '../enums/i-i-s-gotovoe-prilozhenie-тип';

export default FlexberryEnum.extend({
  enum: ТипEnum,
  sourceType: 'IIS.Gotovoe_prilozhenie.Тип'
});
