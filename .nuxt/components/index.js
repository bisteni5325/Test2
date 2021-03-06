import { wrapFunctional } from './utils'

export { default as App } from '../..\\components\\App.vue'
export { default as Billboard } from '../..\\components\\Billboard.vue'
export { default as Custom } from '../..\\components\\Custom.vue'
export { default as Faq } from '../..\\components\\Faq.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as GeneralSeguros } from '../..\\components\\GeneralSeguros.vue'
export { default as HowItWorks } from '../..\\components\\HowItWorks.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Test } from '../..\\components\\test.vue'
export { default as Video } from '../..\\components\\Video.vue'

export const LazyApp = import('../..\\components\\App.vue' /* webpackChunkName: "components/app" */).then(c => wrapFunctional(c.default || c))
export const LazyBillboard = import('../..\\components\\Billboard.vue' /* webpackChunkName: "components/billboard" */).then(c => wrapFunctional(c.default || c))
export const LazyCustom = import('../..\\components\\Custom.vue' /* webpackChunkName: "components/custom" */).then(c => wrapFunctional(c.default || c))
export const LazyFaq = import('../..\\components\\Faq.vue' /* webpackChunkName: "components/faq" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyGeneralSeguros = import('../..\\components\\GeneralSeguros.vue' /* webpackChunkName: "components/general-seguros" */).then(c => wrapFunctional(c.default || c))
export const LazyHowItWorks = import('../..\\components\\HowItWorks.vue' /* webpackChunkName: "components/how-it-works" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyTest = import('../..\\components\\test.vue' /* webpackChunkName: "components/test" */).then(c => wrapFunctional(c.default || c))
export const LazyVideo = import('../..\\components\\Video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
