<template>
    <div class="row p-1 g-3 align-items-center">
        <div class="col-4">
            <label for="inputPassword6" class="col-form-label row justify-content-end">{{ profilePasswordItem }}</label>
        </div>
        <div class="col-8">
            <input 
                class="form-control" 
                aria-describedby="passwordHelpInline"
                type="password"
                id="disabledTextInput"
                :value="value" 
                @input="$emit('input', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePasswordField',
    props: {
        value: {
            type: String,
            required: true 
        },
        profilePasswordItem: {
            type: String,
            required: true 
        }
    }
}
</script>

<style scoped>
    
</style>