const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect('MONGOID')

const todoSchema = mongoose.Schema(
    {
        title:  String,
        descrepition: String,
        completed:  boolean
    }
)

const Todo = mongoose.model('Todo', todoSchema)

module.exports = (
    Todo
)