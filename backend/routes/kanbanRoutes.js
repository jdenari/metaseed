const router = require("express").Router();
const Kanban = require("../models/kanban");

// Rota para obter todas as tarefas
router.get('/', async (req, res) => {
    try {
        const tasks = await Kanban.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefas!', error });
    }
});

router.post('/add-task', async (req, res) => {
    const requiredFields = ['task_name', 'status', 'priority', 'responsible', 'created_by', 'deadline', 'project_id'];

    const missingFields = requiredFields.filter(field => req.body[field] === undefined);

    if (missingFields.length > 0) {
        return res.status(400).json({ message: `Os seguintes campos obrigatórios estão faltando: ${missingFields.join(', ')}` });
    }

    try {
        // Encontre a última tarefa adicionada e obtenha o próximo ID disponível
        const lastTask = await Kanban.findOne().sort('-id');
        const newTaskId = lastTask ? lastTask.id + 1 : 1;

        // Crie uma nova tarefa usando os dados recebidos e o novo ID
        const newTask = new Kanban({
            id: newTaskId,
            ...req.body
        });

        // Salve a tarefa no banco de dados
        await newTask.save();

        // Envie a tarefa criada como resposta
        res.status(201).json(newTask);
    } catch (error) {
        // Em caso de erro, envie uma mensagem de erro
        res.status(500).json({ message: 'Erro ao adicionar a tarefa!', error });
    }
});

router.put('/replace-data', async (req, res) => {
    const newData = req.body;

    if (!Array.isArray(newData)) {
        return res.status(400).json({ message: 'O corpo da requisição deve ser um array de tarefas' });
    }

    try {
        // Remover todos os registros atuais
        await Kanban.deleteMany({});

        // Inserir novos dados
        const insertedData = await Kanban.insertMany(newData);

        // Retornar a base de dados atualizada
        res.status(200).json(insertedData);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao substituir os dados!', error });
    }
});

module.exports = router;
