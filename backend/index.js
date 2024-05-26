const express = require('express');
const { c_todo, u_todo} = require("./types");
const app = express()

app.use(express.json())




app.post("/todo", function(req, res) {
  const createPayload = req.body;
  const parsedPayload = c_todo.safeParse(createPayload)
  if (parsedPayload.success) {
    res.status(411).json({
        msg: "Invalid"
    })
  }
    return;
})

app.get("todos", function(req, res){

})

app.put("/completed", function(req, res){
  const updatePayload = req.body;
  const parsedPayload = u_todo.safeParse(updatePayload)
  if (parsedPayload.success) {
    res.status(411).json({
        msg: "Invalid"
    })
  }
    return;
})

