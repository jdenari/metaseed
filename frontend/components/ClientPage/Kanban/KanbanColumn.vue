<template>
    <div class="kanban-column">
        <h3 class="column-title">{{ column.title }}</h3>
        <div class="cards">
            <KanbanCard
                v-for="(card, index) in columnCards"
                :key="index"
                :card="card"
                @decrease="handleDecreaseClick($event)"
                @increase="handleIncreaseClick($event)"
            />
        </div>
    </div>
</template>
  
<script>
    import KanbanCard from './KanbanCard.vue'
    
    export default {
        components: {
            KanbanCard,
        },
        props: {
            column: {
                type: Object,
                required: true,
            },
            cards: {
                    type: Array,
                    required: true,
                },
            },
        computed: {
            columnCards() {
                return this.cards;
            },
        },
        methods: {
            handleDecreaseClick(event) {
                this.$store.commit('DECREASE_TASK_STATUS', event);
            },
            handleIncreaseClick(event) {
                this.$store.commit('INCREASE_TASK_STATUS', event);
            },
        },
    }
</script>
  
<style>
    .kanban-column {
        flex: 1;
        border: 1px solid #ccc;
        padding: 1rem;
        background-color: #f7f7f7;
    }
    
    .column-title {
        margin-bottom: 1rem;
    }
    
    .cards {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
  