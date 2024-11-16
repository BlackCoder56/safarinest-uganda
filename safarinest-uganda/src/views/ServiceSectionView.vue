<template>
    <NavbarCompo />    
    <div class="ts">
        <ServiceSection />
    </div>    
    <FooterCompo />
</template>


<script>
    import NavbarCompo from '@/components/NavbarCompo.vue';
    import ServiceSection from '@/components/ServiceSection.vue';
    import FooterCompo from '@/components/FooterCompo.vue';

    export default{
        components: {
            NavbarCompo,
            ServiceSection,
            FooterCompo,
        }
    }
</script>

<style scoped>
    .ts{
        margin-top:4%;
    }
</style>

