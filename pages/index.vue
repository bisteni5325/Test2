<template>
  <div>
    <Navbar />  
    <Video />
    <HowItWorks />
    <Custom />
    <Faq />
  </div>
</template>

<script>
import NavBar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import Video from '../components/Video'
import Custom from '../components/Custom'
  import Faq from '../components/Faq'
export default {
  components: { NavBar, Video, HowItWorks, Custom, Faq }
}
</script>

<style>
</style>
