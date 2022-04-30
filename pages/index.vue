<template>
  <div class="bg-primary text-white">
    <Hero />
    <Services />
    <LastestWorks />
    <Tool />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Services from '../components/Services.vue';
import LastestWorks from '../components/LastestWorks.vue';
import Tool from '../components/Tool.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
import AOS from 'aos';
import "aos/dist/aos.css";
export default {
  name: 'IndexPage',
  components:{
    Hero, Services, LastestWorks, Tool, Contact, Footer
  },
  mounted(){
    AOS.init();
  }
}
</script>
<style>
html{
  scroll-behavior: smooth;
}
.title{
        font-family: 'Expletus Sans', cursive;
    }
</style>
