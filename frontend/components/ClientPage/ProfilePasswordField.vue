<template>
    <div class="row p-1 g-3 align-items-center">
        <div class="col-4">
            <label for="inputPassword6" class="col-form-label row justify-content-end">{{ profilePasswordItem }}</label>
        </div>
        <div class="col-8">
            <input 
                class="form-control" 
                aria-describedby="passwordHelpInline"
                :value="profilePasswordModel"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePasswordField',
    props: ['profilePasswordItem', 'profilePasswordModel'],
}
</script>

<style scoped>
    
</style>