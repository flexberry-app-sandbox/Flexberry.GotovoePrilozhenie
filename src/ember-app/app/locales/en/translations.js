import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGotovoe_prilozhenieКлиентыLForm from './forms/i-i-s-gotovoe-prilozhenie-клиенты-l';
import IISGotovoe_prilozhenieМатериалыLForm from './forms/i-i-s-gotovoe-prilozhenie-материалы-l';
import IISGotovoe_prilozhenieПоставщикиLForm from './forms/i-i-s-gotovoe-prilozhenie-поставщики-l';
import IISGotovoe_prilozhenieПриходДенегLForm from './forms/i-i-s-gotovoe-prilozhenie-приход-денег-l';
import IISGotovoe_prilozhenieРасходДенегLForm from './forms/i-i-s-gotovoe-prilozhenie-расход-денег-l';
import IISGotovoe_prilozhenieРегистрОборотLForm from './forms/i-i-s-gotovoe-prilozhenie-регистр-оборот-l';
import IISGotovoe_prilozhenieТоварыLForm from './forms/i-i-s-gotovoe-prilozhenie-товары-l';
import IISGotovoe_prilozhenieУслугиLForm from './forms/i-i-s-gotovoe-prilozhenie-услуги-l';
import IISGotovoe_prilozhenieФинансистыLForm from './forms/i-i-s-gotovoe-prilozhenie-финансисты-l';
import IISGotovoe_prilozhenieКлиентыEForm from './forms/i-i-s-gotovoe-prilozhenie-клиенты-e';
import IISGotovoe_prilozhenieМатериалыEForm from './forms/i-i-s-gotovoe-prilozhenie-материалы-e';
import IISGotovoe_prilozhenieПоставщикиEForm from './forms/i-i-s-gotovoe-prilozhenie-поставщики-e';
import IISGotovoe_prilozhenieПриходДенегEForm from './forms/i-i-s-gotovoe-prilozhenie-приход-денег-e';
import IISGotovoe_prilozhenieРасходДенегEForm from './forms/i-i-s-gotovoe-prilozhenie-расход-денег-e';
import IISGotovoe_prilozhenieРегистрОборотEForm from './forms/i-i-s-gotovoe-prilozhenie-регистр-оборот-e';
import IISGotovoe_prilozhenieТоварыEForm from './forms/i-i-s-gotovoe-prilozhenie-товары-e';
import IISGotovoe_prilozhenieУслугиEForm from './forms/i-i-s-gotovoe-prilozhenie-услуги-e';
import IISGotovoe_prilozhenieФинансистыEForm from './forms/i-i-s-gotovoe-prilozhenie-финансисты-e';
import IISGotovoe_prilozhenieКлиентыModel from './models/i-i-s-gotovoe-prilozhenie-клиенты';
import IISGotovoe_prilozhenieМатериалыModel from './models/i-i-s-gotovoe-prilozhenie-материалы';
import IISGotovoe_prilozhenieПереченьМатModel from './models/i-i-s-gotovoe-prilozhenie-перечень-мат';
import IISGotovoe_prilozhenieПереченьТоваровModel from './models/i-i-s-gotovoe-prilozhenie-перечень-товаров';
import IISGotovoe_prilozhenieПереченьУслугModel from './models/i-i-s-gotovoe-prilozhenie-перечень-услуг';
import IISGotovoe_prilozhenieПоставщикиModel from './models/i-i-s-gotovoe-prilozhenie-поставщики';
import IISGotovoe_prilozhenieПриходДенегModel from './models/i-i-s-gotovoe-prilozhenie-приход-денег';
import IISGotovoe_prilozhenieРасходДенегModel from './models/i-i-s-gotovoe-prilozhenie-расход-денег';
import IISGotovoe_prilozhenieРегистрОборотModel from './models/i-i-s-gotovoe-prilozhenie-регистр-оборот';
import IISGotovoe_prilozhenieСоставТовараModel from './models/i-i-s-gotovoe-prilozhenie-состав-товара';
import IISGotovoe_prilozhenieТоварыModel from './models/i-i-s-gotovoe-prilozhenie-товары';
import IISGotovoe_prilozhenieУслугиModel from './models/i-i-s-gotovoe-prilozhenie-услуги';
import IISGotovoe_prilozhenieФинансистыModel from './models/i-i-s-gotovoe-prilozhenie-финансисты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gotovoe-prilozhenie-клиенты': IISGotovoe_prilozhenieКлиентыModel,
    'i-i-s-gotovoe-prilozhenie-материалы': IISGotovoe_prilozhenieМатериалыModel,
    'i-i-s-gotovoe-prilozhenie-перечень-мат': IISGotovoe_prilozhenieПереченьМатModel,
    'i-i-s-gotovoe-prilozhenie-перечень-товаров': IISGotovoe_prilozhenieПереченьТоваровModel,
    'i-i-s-gotovoe-prilozhenie-перечень-услуг': IISGotovoe_prilozhenieПереченьУслугModel,
    'i-i-s-gotovoe-prilozhenie-поставщики': IISGotovoe_prilozhenieПоставщикиModel,
    'i-i-s-gotovoe-prilozhenie-приход-денег': IISGotovoe_prilozhenieПриходДенегModel,
    'i-i-s-gotovoe-prilozhenie-расход-денег': IISGotovoe_prilozhenieРасходДенегModel,
    'i-i-s-gotovoe-prilozhenie-регистр-оборот': IISGotovoe_prilozhenieРегистрОборотModel,
    'i-i-s-gotovoe-prilozhenie-состав-товара': IISGotovoe_prilozhenieСоставТовараModel,
    'i-i-s-gotovoe-prilozhenie-товары': IISGotovoe_prilozhenieТоварыModel,
    'i-i-s-gotovoe-prilozhenie-услуги': IISGotovoe_prilozhenieУслугиModel,
    'i-i-s-gotovoe-prilozhenie-финансисты': IISGotovoe_prilozhenieФинансистыModel
  },

  'application-name': 'Gotovoe_prilozhenie',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Gotovoe_prilozhenie',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gotovoe_prilozhenie',
          title: 'Gotovoe_prilozhenie'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-gotovoe-prilozhenie-приход-денег-l': {
            caption: 'Приход денег',
            title: 'Приход денег'
          },
          'i-i-s-gotovoe-prilozhenie-расход-денег-l': {
            caption: 'Расход денег',
            title: 'Расход денег'
          }
        },
        контрагенты: {
          caption: 'Контрагенты',
          title: 'Контрагенты',
          'i-i-s-gotovoe-prilozhenie-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          },
          'i-i-s-gotovoe-prilozhenie-поставщики-l': {
            caption: 'Поставщики',
            title: 'Поставщики'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-gotovoe-prilozhenie-финансисты-l': {
            caption: 'Финансисты',
            title: 'Финансисты'
          }
        },
        номенклатура: {
          caption: 'Номенклатура',
          title: 'Номенклатура',
          'i-i-s-gotovoe-prilozhenie-материалы-l': {
            caption: 'Материалы',
            title: 'Материалы'
          },
          'i-i-s-gotovoe-prilozhenie-услуги-l': {
            caption: 'Услуги',
            title: 'Услуги'
          },
          'i-i-s-gotovoe-prilozhenie-товары-l': {
            caption: 'Товары',
            title: 'Товары'
          }
        },
        регистры: {
          caption: 'Регистры',
          title: 'Регистры',
          'i-i-s-gotovoe-prilozhenie-регистр-оборот-l': {
            caption: 'Регистр оборотов',
            title: 'Регистр оборот'
          }
        },
        'gotovoe-prilozhenie': {
          caption: 'Gotovoe_prilozhenie',
          title: 'Gotovoe_prilozhenie',
          'i-i-s-gotovoe-prilozhenie-финансисты-l': {
            caption: 'Финансисты',
            title: ''
          },
          'i-i-s-gotovoe-prilozhenie-приход-денег-l': {
            caption: 'Приход денег',
            title: ''
          },
          'i-i-s-gotovoe-prilozhenie-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-gotovoe-prilozhenie-расход-денег-l': {
            caption: 'Расход денег',
            title: ''
          },
          'i-i-s-gotovoe-prilozhenie-материалы-l': {
            caption: 'Материалы',
            title: ''
          },
          'i-i-s-gotovoe-prilozhenie-поставщики-l': {
            caption: 'Поставщики',
            title: ''
          },
          'i-i-s-gotovoe-prilozhenie-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-gotovoe-prilozhenie-регистр-оборот-l': {
            caption: 'Регистр оборот',
            title: ''
          },
          'i-i-s-gotovoe-prilozhenie-товары-l': {
            caption: 'Товары',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gotovoe-prilozhenie-клиенты-l': IISGotovoe_prilozhenieКлиентыLForm,
    'i-i-s-gotovoe-prilozhenie-материалы-l': IISGotovoe_prilozhenieМатериалыLForm,
    'i-i-s-gotovoe-prilozhenie-поставщики-l': IISGotovoe_prilozhenieПоставщикиLForm,
    'i-i-s-gotovoe-prilozhenie-приход-денег-l': IISGotovoe_prilozhenieПриходДенегLForm,
    'i-i-s-gotovoe-prilozhenie-расход-денег-l': IISGotovoe_prilozhenieРасходДенегLForm,
    'i-i-s-gotovoe-prilozhenie-регистр-оборот-l': IISGotovoe_prilozhenieРегистрОборотLForm,
    'i-i-s-gotovoe-prilozhenie-товары-l': IISGotovoe_prilozhenieТоварыLForm,
    'i-i-s-gotovoe-prilozhenie-услуги-l': IISGotovoe_prilozhenieУслугиLForm,
    'i-i-s-gotovoe-prilozhenie-финансисты-l': IISGotovoe_prilozhenieФинансистыLForm,
    'i-i-s-gotovoe-prilozhenie-клиенты-e': IISGotovoe_prilozhenieКлиентыEForm,
    'i-i-s-gotovoe-prilozhenie-материалы-e': IISGotovoe_prilozhenieМатериалыEForm,
    'i-i-s-gotovoe-prilozhenie-поставщики-e': IISGotovoe_prilozhenieПоставщикиEForm,
    'i-i-s-gotovoe-prilozhenie-приход-денег-e': IISGotovoe_prilozhenieПриходДенегEForm,
    'i-i-s-gotovoe-prilozhenie-расход-денег-e': IISGotovoe_prilozhenieРасходДенегEForm,
    'i-i-s-gotovoe-prilozhenie-регистр-оборот-e': IISGotovoe_prilozhenieРегистрОборотEForm,
    'i-i-s-gotovoe-prilozhenie-товары-e': IISGotovoe_prilozhenieТоварыEForm,
    'i-i-s-gotovoe-prilozhenie-услуги-e': IISGotovoe_prilozhenieУслугиEForm,
    'i-i-s-gotovoe-prilozhenie-финансисты-e': IISGotovoe_prilozhenieФинансистыEForm
  },

});

export default translations;
