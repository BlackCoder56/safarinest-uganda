<template>
    <NavbarCompo />    
    <div class="ts">
        <h2>About us</h2>
        <AboutSection />
    </div>    
    <FooterCompo />
</template>


<script>
    import NavbarCompo from '@/components/NavbarCompo.vue';
    import AboutSection from '@/components/AboutSection.vue';
    import FooterCompo from '@/components/FooterCompo.vue';

    export default{
        components: {
            NavbarCompo,
            AboutSection,
            FooterCompo,
        }
    }
</script>

<style scoped>
    .ts{
        margin-top:6%;
    }
</style>

