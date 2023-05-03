<template>
	<div class="kanban-card rounded p-2">
		<div class="card-header p-2">
			<h5 class="m-0">{{ card.title }}</h5>
			<span class="priority" :class="priorityClass">{{ card.priority }}</span>
		</div>
		<p class="p-2 my-1">{{ card.description }}</p>
			<div class="card-footer p-2 d-flex">
			<div class="p col-8 p-0 d-flex align-items-center">
				{{ card.footerText }}
			</div>
			<div class="button-container col-4 p-0">
				<button type="button" class="btn btn-outline-secondary px-1 py-0">
					<img src="../../../static/icons/arrow-left-short.svg" alt="Ícone 1" class="icon" />
				</button>
				<button type="button" class="btn btn-outline-secondary px-1 py-0">
					<img src="../../../static/icons/arrow-right-short.svg" alt="Ícone 2" class="icon" />
				</button>
			</div>
		</div>
	</div>
  </template>
    
<script>
    export default {
        props: {
            card: {
                type: Object,
                required: true,
            },
        },
        computed: {
            priorityClass() {
                switch (this.card.priority) {
                    case 'Urgente': return 'priority-urgent';
                    case 'Alta': return 'priority-high';
                    case 'Médio': return 'priority-medium';
                    case 'Baixa': return 'priority-low';
                    default: return '';
                }
            },
        },
    }
</script>
  
<style>
.kanban-card {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.priority {
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 4px;
    padding: 0.2rem 0.4rem;
}

.priority-urgent {
    background-color: #e74c3c;
    color: #fff;
}

.priority-high {
    background-color: #f39c12;
    color: #fff;
}

.priority-medium {
    background-color: #f1c40f;
    color: #fff;
}

.priority-low {
    background-color: #27ae60;
    color: #fff;
}
.card-footer {
    margin-top: auto;
    font-size: 0.8rem;
    color: #777;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;
}
</style>
  
  