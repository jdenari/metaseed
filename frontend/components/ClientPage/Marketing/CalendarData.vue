    <template>
        <div class="d-flex">
            <div class="form-group mr-2">
                <label for="startDate" class="mr-2">DATA DE INÍCIO:</label>
                <input type="date" class="form-control" id="startDate" :value="startDate" @input="$emit('update:start-date', $event.target.value)">
            </div>
            <div class="form-group mx-2">
                <label for="endDate" class="mr-2">DATA FINAL:</label>
                <input type="date" class="form-control" id="endDate" :value="endDate" @input="$emit('update:end-date', $event.target.value)">
            </div>
        </div>
    </template>
    
    <script>
    export default {
        props: {
        startDate: String,
        endDate: String
        }
    };
</script>