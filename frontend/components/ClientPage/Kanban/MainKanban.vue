<template>
    <div class="p-3 px-5">
        <h6 class="text-center text-white">kanban</h6>
        <KanbanBoard :columns="columns" :cards="formattedCards" />
        <div class="p-3">
            <SmallButton 
                smallButtonText="Salvar"
                @event="handleSaveKanban"
            />
        </div>
        <MessageWarning 
            :messageWarning="this.$store.state.messageWarning"
            class="p-3"
        />
    </div>
</template>
  
<script>
    import { mapState } from 'vuex';
    import KanbanBoard from './KanbanBoard.vue';
    import SmallButton from '../../SmallButton.vue';
    import MessageWarning from '../../MessageWarning.vue';
    
    export default {
        name: 'MainKanban',
        components: {
            KanbanBoard
            , SmallButton
            , MessageWarning
        },
        data() {
            return {
                columns: [
                    { title: 'Backlog', status: 'backlog' },
                    { title: 'To Do', status: 'todo' },
                    { title: 'In Progress', status: 'inprogress' },
                    { title: 'Done', status: 'done' },
                ],
            };
        },
        computed: {
            ...mapState(['kanbanData']),
            formattedCards() {
                return this.kanbanData.map(task => ({
                    id: task.id,
                    title: task.task_name,
                    description: task.description,
                    status: task.status,
                    priority: task.priority,
                    footerText: task.responsible,
                }));
            },
        },
        methods: {
            handleSaveKanban(){
                this.$store.dispatch('replaceKanbanData')
            }
        }
    };
</script>

  