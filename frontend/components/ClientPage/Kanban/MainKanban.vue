<template>
    <div class="p-3 px-5">
        <h6 class="text-center text-white">kanban</h6>
        <KanbanBoard :columns="columns" :cards="cards" />
    </div>
</template>
  
<script>
    import KanbanBoard from './KanbanBoard.vue';
    
    export default {
        name: 'MainKanban',
        components: {
            KanbanBoard,
        },
        data() {
        return {
            columns: [
                { title: 'Backlog', status: 'backlog' },
                { title: 'To Do', status: 'todo' },
                { title: 'In Progress', status: 'inprogress' },
                { title: 'Done', status: 'done' },
            ],
            cards: [
                { id: 1, title: 'Task 1', description: 'Description for task 1', status: 'backlog', priority: 'Urgente', footerText: 'Texto do rodapé 1' },
                { id: 2, title: 'Task 2', description: 'Description for task 2', status: 'todo', priority: 'Alta', footerText: 'Texto do rodapé 2' },
                { id: 3, title: 'Task 3', description: 'Description for task 3', status: 'inprogress', priority: 'Médio', footerText: 'Texto do rodapé 3' },
                { id: 4, title: 'Task 4', description: 'Description for task 4', status: 'done', priority: 'Baixa', footerText: 'Texto do rodapé 4' },
                { id: 5, title: 'Task 5', description: 'Description for task 5', status: 'done', priority: 'Baixa', footerText: 'Texto do rodapé 5' },
            ],
        };
        },
    };
</script>
  