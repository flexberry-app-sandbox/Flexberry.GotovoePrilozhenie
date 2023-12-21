import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.caption'),
          title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.title'),
          children: [{
            link: 'i-i-s-gotovoe-prilozhenie-финансисты-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-финансисты-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-финансисты-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-gotovoe-prilozhenie-приход-денег-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-приход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-приход-денег-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-gotovoe-prilozhenie-клиенты-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-клиенты-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-gotovoe-prilozhenie-расход-денег-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-расход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-расход-денег-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-gotovoe-prilozhenie-материалы-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-материалы-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-gotovoe-prilozhenie-поставщики-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-поставщики-l.title'),
            children: null
          }, {
            link: 'i-i-s-gotovoe-prilozhenie-услуги-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-услуги-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-gotovoe-prilozhenie-регистр-оборот-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-регистр-оборот-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-регистр-оборот-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-gotovoe-prilozhenie-товары-l',
            caption: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.gotovoe-prilozhenie.i-i-s-gotovoe-prilozhenie-товары-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})