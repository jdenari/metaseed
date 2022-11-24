<template>
    <div class="row p-1 g-3 align-items-center">
        <div class="col-4">
            <label for="inputPassword6" class="col-form-label row justify-content-end">{{ profilePasswordItem }}</label>
        </div>
        <div class="col-8">
            <input type="password" class="form-control" aria-describedby="passwordHelpInline">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePasswordField',
    props: ['profilePasswordItem']
}
</script>

<style scoped>
    
</style>