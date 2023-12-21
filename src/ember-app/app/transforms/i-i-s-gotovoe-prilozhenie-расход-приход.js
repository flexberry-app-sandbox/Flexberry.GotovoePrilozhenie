import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import РасходПриходEnum from '../enums/i-i-s-gotovoe-prilozhenie-расход-приход';

export default FlexberryEnum.extend({
  enum: РасходПриходEnum,
  sourceType: 'IIS.Gotovoe_prilozhenie.РасходПриход'
});
