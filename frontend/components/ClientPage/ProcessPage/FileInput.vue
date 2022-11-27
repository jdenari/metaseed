<template>
    <div class="d-flex w-50 m-auto p-3">
        <div class="w-50">
            <b-form-file v-model="file2" class="" plain></b-form-file>
            <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
        </div>
        <div class="w-50">
            <b-form-select
                v-model="selected"
                :options="options"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-select>
            <div class="">
                Selected: {{ selected }}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'FileInput',
        data() {
            return {
                file2: null,
                selected: 'A',
                options: [
                    { item: 'A', name: 'Option A' },
                    { item: 'B', name: 'Option B' },
                ]
            }
        }
    }
</script>