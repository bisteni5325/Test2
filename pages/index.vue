<template>
  <div>
    <Navbar />  
    <Video />
    <HowItWorks />
    <Custom />
  </div>
</template>

<script>
import NavBar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import Video from '../components/Video'
import Custom from '../components/Custom'
export default {
  components: { NavBar, Video, HowItWorks, Custom }
}
</script>

<style>
</style>
