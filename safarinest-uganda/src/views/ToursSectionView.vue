<template>
    <NavbarCompo />
    <div class="ts">
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
        margin-top: 4%;
        height: 79vh;    
    }

    /* @media (max-width: 769px) {
        .ts{

        }
    } */
</style>

