import { wrapFunctional } from './utils'

export { default as Billboard } from '../..\\components\\Billboard.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'

export const LazyBillboard = import('../..\\components\\Billboard.vue' /* webpackChunkName: "components/billboard" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
