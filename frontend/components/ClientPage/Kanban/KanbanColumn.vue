<template>
    <div class="kanban-column shadow-sm p-3 bg-body-tertiary rounded">
        <h5 class="column-title bg-white shadow-sm p-2 border bg-body-tertiary rounded text-center">{{ column.title }}</h5>
        <div class="cards">
            <KanbanCard
                v-for="(card, index) in columnCards"
                :key="index"
                :card="card"
                @decrease="handleDecreaseClick($event)"
                @increase="handleIncreaseClick($event)"
            />
            <button class="btn btn-outline-light border text-dark py-0 shadow-sm bg-body-tertiary rounded" @click="handleAddCard">+</button>
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
            handleAddCard() {
                // Implemente a lógica para adicionar um novo card aqui
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
        height: 600px; /* Limita a altura máxima */
        overflow-y: auto;  /* Adiciona rolagem vertical quando necessário */
    }

</style>


  