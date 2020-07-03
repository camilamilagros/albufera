// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import "./tailwind.css";


export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { class: 'h-full' }
  head.bodyAttrs = { class: 'h-full' }
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
