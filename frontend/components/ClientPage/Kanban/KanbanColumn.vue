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
                @remove="handleRemoveCard($event)"
            />
            <button
                class="btn btn-outline-light border text-dark py-0 shadow-sm bg-body-tertiary rounded"
                @click="handleAddCard"
            >
                {{ isAddTaskVisible ? '-' : '+' }}
            </button>
            <div class="col-12 p-0" v-show="isAddTaskVisible">
                <div class="border p-1">
                    <KanbanAddTask
                        v-for="(item, index) in taskDataItems" 
                        :key="index"
                        :taskDataItem="taskItems[index]"
                        v-model="item.model"
                    >
                    </KanbanAddTask>
                    <div class="d-grid d-md-flex justify-content-md-end m-1">
                        <button type="button" class="btn btn-outline-light border btn-include text-dark py-0 shadow-sm bg-body-tertiary rounded" @click="handleAddTask">Incluir</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import KanbanCard from './KanbanCard.vue'
    import KanbanAddTask from './FormAddTask.vue';
    import { mapActions } from 'vuex';

    export default {
        components: {
            KanbanCard,
            KanbanAddTask,
        },
        data(){
            return {
                taskName: '',
                taskDescription: '',
                taskPriority: '',
                taskStatus: '',
                taskResponsable: '',
                isAddTaskVisible: false,
                taskItems: [
                    'Tarefa: ',
                    'Descrição: ',
                    'Prioridade: ',
                    'Status: ',
                    'Responsável: ',
                ],
                taskDataItems: [
                    { model: this.taskName },
                    { model: this.taskDescription },
                    { model: this.taskPriority },
                    { model: this.taskStatus },    
                    { model: this.taskResponsable },       
                ],
                taskProfileData: [],
                columnCardss: null,
            }
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
            ...mapActions(['addTaskKanbanData']),
            handleAddTask() {
                const dataObject = {
                    task_name: this.taskDataItems[0].model,
                    description: this.taskDataItems[1].model,
                    priority: this.taskDataItems[2].model,
                    status: this.taskDataItems[3].model,
                    responsible: this.taskDataItems[4].model,
                    created_by: 42,
                    deadline: "2023-06-01T00:00:00.000Z",
                    tags: ["tag1", "tag2"],
                    project_id: 10,
                };

                console.log(dataObject)
                
                this.$store.commit('ADD_TASK_KANBAN_DATA', dataObject)
                this.handleAddCard();
            },
            handleDecreaseClick(event) {
                this.$store.commit('DECREASE_TASK_STATUS', event);
            },
            handleIncreaseClick(event) {
                this.$store.commit('INCREASE_TASK_STATUS', event);
            },
            handleRemoveCard(event){
                this.$store.commit('REMOVE_TASK', event);
            },
            handleAddCard() {
                this.isAddTaskVisible = !this.isAddTaskVisible;
            },
        },
    }
</script>
  
<style scoped>
    .kanban-column {
        flex: 1;
        border: 1px solid #ccc;
        padding: 1rem;
        background-color: #f7f7f7;
        min-width: 202px;
    }
    
    .column-title {
        margin-bottom: 1rem;
    }
    
    .cards {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 550px;
        overflow-y: auto; 
    }
    .btn-include{
        font-size: 12px;
    }

</style>


  