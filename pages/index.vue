<template>
  <div>
    <Navbar />  
    <Video />
    <HowItWorks />
    <Custom />
    <Faq />
    <GeneralSeguros />
    <Navbar />
    <App />
  </div>
</template>

<script>
import NavBar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import Video from '../components/Video'
import Custom from '../components/Custom'
import Faq from '../components/Faq'
import GeneralSeguros from '../components/GeneralSeguros'
import App from '../components/App'
export default {
  components: { NavBar, Video, HowItWorks, Custom, Faq, GeneralSeguros, App }
}
</script>

<style>
</style>
