<template>
    <div class="kanban-board">
        <KanbanColumn
            v-for="(column, index) in columns"
            :key="index"
            :column="column"
            :cards="cards.filter(card => card.status === column.status)"
            :status="column.status"
        />
    </div>
</template>
  
<script>
    import KanbanColumn from './KanbanColumn.vue'
    export default {
        components: {
            KanbanColumn,
        },
        props: {
            columns: {
                type: Array,
                required: true,
            },
            cards: {
                type: Array,
                required: true,
            },
        },
    }
</script>
  
<style scoped>
    .kanban-board {
        display: flex;
        gap: 1rem;
        overflow-x: auto;
    }
</style>
  