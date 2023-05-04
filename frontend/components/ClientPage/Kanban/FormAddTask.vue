<template>
    <div class="row align-items-center p-0 m-0">
        <div class="col-4 m-0 px-1">
            <label class="col-form-label row justify-content-end m-0">{{ taskDataItem }}</label>
        </div>
        <div class="col-8 m-0 px-1">
            <template v-if="taskDataItem === 'Prioridade: '">
                <select
                    class="form-control form-control-text p-1"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
                >
                    <option value="Urgente">Urgente</option>
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                </select>
            </template>
            <template v-else-if="taskDataItem === 'Status: '">
                <select
                    class="form-control form-control-text p-1"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
                >
                    <option value="backlog">Backlog</option>
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </template>
            <template v-else-if="taskDataItem === 'Responsável: '">
                <select
                    class="form-control form-control-text p-1"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
                >
                    <option value="Jean Lopes">Jean Lopes</option>
                    <option value="João Denari">João Denari</option>
                    <option value="Jonas Lopes">Jonas Lopes</option>
                </select>
            </template>
            <template v-else>
                <input
                    type="text"
                    class="form-control form-control-text p-1"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
                >
            </template>
        </div>
    </div>
</template>
  
<script>
    export default {
        components: {},
        name: 'KanbanAddTask',
        props: {
            taskDataItem: {
                type: String,
                required: true
            },
            value: {
                required: true
            },
        }
    }
</script>
  
<style scoped>
.col-form-label{
    font-size: 12px;
}
.form-control{
    height: 25px;
}
.form-control-text{
    font-size: 10px;
}
</style>