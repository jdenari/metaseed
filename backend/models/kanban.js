const mongoose = require("mongoose");

const kanbanSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    task_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    responsible: {
        type: String,
        required: true
    },
    created_by: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    deadline: {
        type: Date,
        required: true
    },
    tags: [{
        type: String
    }],
    project_id: {
        type: Number,
        required: true
    }
});

const Kanban = mongoose.model("Kanban", kanbanSchema);

module.exports = Kanban;
