<template>
    <NavbarCompo />
    
    <div class="ts">
        <AboutSection />
        <h2>About us</h2>
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
        margin-top:80px;
    }
</style>

