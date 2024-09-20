<template>
  <div class="home">    
    <HomeCompo />
    <AboutSection />
    <ServiceSection />
    <TourSection />
  </div>
</template>

<script>
import HomeCompo from '@/components/HomeCompo.vue';
import AboutSection from '@/components/AboutSection.vue';
import ServiceSection from '@/components/ServiceSection.vue';
import TourSection from '@/components/TourSection.vue';

export default {
  components: {
    HomeCompo,
    AboutSection,
    ServiceSection,
    TourSection,
  },
};
</script>

<style scoped>
/* Add padding to ensure the content doesn't overlap with the fixed navbar */
.home {
  padding-top: 80px; /* Adjust based on navbar height */
}
</style>
