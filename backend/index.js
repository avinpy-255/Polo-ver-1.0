const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())


app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you're sending wrong input"
        })
        return;
    }

    //mongoDB connection
    await todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
})

app.get('/todos', async (req, res) => {
    try {
        const Todos = await todo.find({}); // Make sure Todo model is imported correctly
        res.json({ Todos });
    } catch (error) {
        console.error('Error fetching todos:', error); // Log the error for debugging
        res.status(500).json({ msg: 'Internal server error' }); // Send an error response
    }
});

app.put('/completed', async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you're sending wrong input"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "todo marked successfully"
    })
})

app.listen(3001)