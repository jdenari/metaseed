<template>
    <div>
        <div 
            class="p w-100 m-auto text-center" 
            v-if="this.$store.state.messageWarning"> {{ messageWarning }} </div>
    </div>
</template>

<script>

export default ({
    name: 'MessageWarning',
    props: {
        messageWarning: {
            type: [String, Array, Number]
        }
    }
})
</script>
