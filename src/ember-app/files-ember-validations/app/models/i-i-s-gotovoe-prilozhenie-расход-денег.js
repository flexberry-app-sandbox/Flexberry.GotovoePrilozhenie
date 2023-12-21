import {
  defineNamespace,
  defineProjections,
  Model as РасходДенегMixin
} from '../mixins/regenerated/models/i-i-s-gotovoe-prilozhenie-расход-денег';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасходДенегMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
