import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  HowItWorks: () => import('../..\\components\\HowItWorks.vue' /* webpackChunkName: "components/how-it-works" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Video: () => import('../..\\components\\Video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
