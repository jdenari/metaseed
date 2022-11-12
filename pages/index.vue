<template>
    <div>
        <LandingPageHeader />
        <h1>index - landing page</h1>
        <NuxtLink to="/auth/signin">GO TO SIGNIN</NuxtLink>
    </div>
</template>

<script>
import LandingPageHeader from '../components/LandingPageHeader.vue';

export default {
    name: "IndexPage",
    components: { 
        LandingPageHeader }
}
</script>
