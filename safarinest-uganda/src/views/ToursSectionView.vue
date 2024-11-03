<template>
    <NavbarCompo />
    <div class="ts">
        <h2>About us</h2>
        <TourSection />

    </div>    
    <FooterCompo />
</template>


<script>
    import NavbarCompo from '@/components/NavbarCompo.vue';
    import TourSection from '@/components/TourSection.vue';
    import FooterCompo from '@/components/FooterCompo.vue';

    export default{
        components: {
            NavbarCompo,
            TourSection,
            FooterCompo,
        }
    }
</script>

<style scoped>
    .ts{
        margin-top: 5%;
        height: 79vh;    
    }
</style>

