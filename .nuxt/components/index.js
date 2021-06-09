import { wrapFunctional } from './utils'

export { default as Custom } from '../..\\components\\Custom.vue'
export { default as HowItWorks } from '../..\\components\\HowItWorks.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Video } from '../..\\components\\Video.vue'

export const LazyCustom = import('../..\\components\\Custom.vue' /* webpackChunkName: "components/custom" */).then(c => wrapFunctional(c.default || c))
export const LazyHowItWorks = import('../..\\components\\HowItWorks.vue' /* webpackChunkName: "components/how-it-works" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyVideo = import('../..\\components\\Video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
