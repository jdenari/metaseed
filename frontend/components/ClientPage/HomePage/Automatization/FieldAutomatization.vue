<template>
    <div class="input-group d-flex align-items-center p-3 w-75">
        <b-form-group class="m-0 mx-2">
            <b-form-file id="file-default"  placeholder="Selecionar Arquivo"></b-form-file>
        </b-form-group>
        <b-form-select v-model="selected" :options="options" class="mx-2"></b-form-select>
        <SmallButton 
            smallButtonText="Acionar"
            class="mx-2"
        />
    </div>
</template>
  
<script>
import SmallButton from '../../../SmallButton.vue'
export default {
    name: 'FieldAutomatization',
    components: {
        SmallButton
    },
    props: {
    },
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Selecione Script' },
          { value: 'a', text: 'Script 1' },
          { value: 'b', text: 'Script 2' },
          { value: 'c', text: 'Script 3' },
        ]
      }
    }
}
</script>

<style scoped>

</style>