<template>
    <div class="m-3 p-3 px-5 bg-white rounded">
        <h2 class="text-center mb-3">KANBAN</h2>
        <MessageWarning 
            :messageWarning="this.$store.state.messageWarning"
            class="p-1"
        />
        <KanbanBoard :columns="columns" :cards="formattedCards" />
        <div class="p-3">
            <SmallButton 
                smallButtonText="Salvar"
                @event="$bvModal.show('modalSaveTaskKanban')"
            />
        </div>
        <b-modal 
				id="modalSaveTaskKanban" 
				ref="modalSaveTaskKanban"
				ok-only
				hide-footer
			>
			<div class="d-block">Tem certeza que quer salvar suas atividades?</div>
				<div class="d-flex flex-row-reverse w-100 mt-4">
					<button 
						@click="handleSaveKanban();$bvModal.hide('modalSaveTaskKanban')"
						class="btn btn-primary m-1"
						type="button"  
						>Sim
					</button>
					<button 
						@click="$bvModal.hide('modalSaveTaskKanban')"
						class="btn btn-secondary m-1"
						type="button" 
						>Voltar
					</button>
				</div>
			</b-modal>
    </div>
</template>
  
<script>
    import { mapState } from 'vuex';
    import KanbanBoard from './KanbanBoard.vue';
    import SmallButton from '../../SmallButton.vue';
    import MessageWarning from '../../MessageWarning.vue';
    import KanbanAddTask from './KanbanAddTask.vue';
    
    export default {
        name: 'MainKanban',
        components: {
            KanbanBoard
            , SmallButton
            , MessageWarning
            , KanbanAddTask
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

  