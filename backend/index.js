const express = require('express');
const { createTodo, updateTodo} = require("./types");
const { Todo } = require('./db')
const app = express()

app.use(express.json())




app.post("/todo", async function(req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload)
  if (parsedPayload.success) {
      res.status(411).json({
          msg: "Invalid"
       })
  
      return;
    }
//mongoDb connection 
   await Todo.create ({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
   }
   )     
   res.json({
    msg: 'todo created'
   })
})

app.get("todos", async function(req, res){
  const Todo = await Todo.find({})
  res.json({
    Todo
  })
})

app.put("/completed", async function(req, res){
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload)
  if (parsedPayload.success) {
    res.status(411).json({
        msg: "Invalid"
    })
    return;
  }
   
  await Todo.update({
    _id: req.body.id
  }, {
    completed: true
  })
  res.json({
    msg: 'mark completed'
  })

    
})

app.listen(3000);
