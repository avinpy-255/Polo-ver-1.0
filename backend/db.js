const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://avinashchowdhury81:Avi8420898357@polo-server.yvvel8l.mongodb.net/todos') 

const todoSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        minlength: 1, 
        maxlength: 100,
        trim: true
    },
    description: { type: String, trim: true },
    completed: { type: Boolean, default: false }
}, { timestamps: true });

const todo = mongoose.model('Todo', todoSchema);

module.exports = {
    todo 
};

