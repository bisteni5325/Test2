import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  App: () => import('../..\\components\\App.vue' /* webpackChunkName: "components/app" */).then(c => wrapFunctional(c.default || c)),
  Custom: () => import('../..\\components\\Custom.vue' /* webpackChunkName: "components/custom" */).then(c => wrapFunctional(c.default || c)),
  Faq: () => import('../..\\components\\Faq.vue' /* webpackChunkName: "components/faq" */).then(c => wrapFunctional(c.default || c)),
  GeneralSeguros: () => import('../..\\components\\GeneralSeguros.vue' /* webpackChunkName: "components/general-seguros" */).then(c => wrapFunctional(c.default || c)),
  HowItWorks: () => import('../..\\components\\HowItWorks.vue' /* webpackChunkName: "components/how-it-works" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Video: () => import('../..\\components\\Video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
