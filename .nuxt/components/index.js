import { wrapFunctional } from './utils'

export { default as GeneralSeguros } from '../..\\components\\GeneralSeguros.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'

export const LazyGeneralSeguros = import('../..\\components\\GeneralSeguros.vue' /* webpackChunkName: "components/general-seguros" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
