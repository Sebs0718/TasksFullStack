const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/:id', async (req,res)=>{
    const tasks = await Task.findById(req.params.id);
    res.json(tasks);
});


router.post('/', async(req,res)=>{
    const { title, description} = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({message: "Task created"});
});

router.put('/:id', async (req,res) =>{
    const {title, description} = req.body;
    const newTask = {title, description}
    await Task.findOneAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Updated'});
});

router.delete('/:id', async(req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
});

module.exports = router;