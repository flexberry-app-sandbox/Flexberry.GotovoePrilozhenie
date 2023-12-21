import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gotovoe-prilozhenie-клиенты-l');
  this.route('i-i-s-gotovoe-prilozhenie-клиенты-e',
  { path: 'i-i-s-gotovoe-prilozhenie-клиенты-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-клиенты-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-клиенты-e/new' });
  this.route('i-i-s-gotovoe-prilozhenie-материалы-l');
  this.route('i-i-s-gotovoe-prilozhenie-материалы-e',
  { path: 'i-i-s-gotovoe-prilozhenie-материалы-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-материалы-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-материалы-e/new' });
  this.route('i-i-s-gotovoe-prilozhenie-поставщики-l');
  this.route('i-i-s-gotovoe-prilozhenie-поставщики-e',
  { path: 'i-i-s-gotovoe-prilozhenie-поставщики-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-поставщики-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-поставщики-e/new' });
  this.route('i-i-s-gotovoe-prilozhenie-приход-денег-l');
  this.route('i-i-s-gotovoe-prilozhenie-приход-денег-e',
  { path: 'i-i-s-gotovoe-prilozhenie-приход-денег-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-приход-денег-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-приход-денег-e/new' });
  this.route('i-i-s-gotovoe-prilozhenie-расход-денег-l');
  this.route('i-i-s-gotovoe-prilozhenie-расход-денег-e',
  { path: 'i-i-s-gotovoe-prilozhenie-расход-денег-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-расход-денег-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-расход-денег-e/new' });
  this.route('i-i-s-gotovoe-prilozhenie-регистр-оборот-l');
  this.route('i-i-s-gotovoe-prilozhenie-регистр-оборот-e',
  { path: 'i-i-s-gotovoe-prilozhenie-регистр-оборот-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-регистр-оборот-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-регистр-оборот-e/new' });
  this.route('i-i-s-gotovoe-prilozhenie-товары-l');
  this.route('i-i-s-gotovoe-prilozhenie-товары-e',
  { path: 'i-i-s-gotovoe-prilozhenie-товары-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-товары-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-товары-e/new' });
  this.route('i-i-s-gotovoe-prilozhenie-услуги-l');
  this.route('i-i-s-gotovoe-prilozhenie-услуги-e',
  { path: 'i-i-s-gotovoe-prilozhenie-услуги-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-услуги-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-услуги-e/new' });
  this.route('i-i-s-gotovoe-prilozhenie-финансисты-l');
  this.route('i-i-s-gotovoe-prilozhenie-финансисты-e',
  { path: 'i-i-s-gotovoe-prilozhenie-финансисты-e/:id' });
  this.route('i-i-s-gotovoe-prilozhenie-финансисты-e.new',
  { path: 'i-i-s-gotovoe-prilozhenie-финансисты-e/new' });
});

export default Router;
