import DefaultLayout from '~/layouts/Default.vue';
import VTooltip from 'v-tooltip';
import VueDisqus from 'vue-disqus';
import VueSocialSharing from 'vue-social-sharing';

import '~/assets/scss/main.scss';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(fas);
library.add(fab);

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout);

  Vue.component('font-awesome', FontAwesomeIcon);
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Inklings of Reality discussing true reality in culture.`,
  });

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Inklings of Reality discussing true reality in culture.`,
  });
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
  Vue.use(VueDisqus);
  Vue.use(VueSocialSharing);
  Vue.use(VTooltip, {
    defaultPlacement: 'top-end',
    defaultClass: 'bg-black text-xs px-2 leading-normal py-1 rounded absolute text-gray-400 max-w-xs mb-1'
  });
}