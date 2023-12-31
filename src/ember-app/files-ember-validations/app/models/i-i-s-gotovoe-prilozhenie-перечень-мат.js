import {
  defineNamespace,
  defineProjections,
  Model as ПереченьМатMixin
} from '../mixins/regenerated/models/i-i-s-gotovoe-prilozhenie-перечень-мат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПереченьМатMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
