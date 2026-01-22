const Task = require('../models/Task')

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || "pending",
      user: req.user.id 
    })
    res.status(201).json({ msg: "Task created successfully", task })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ user: req.user.id })
    if (!task) return res.status(404).json({ msg: "Task not found" })
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getTasksById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id
    })
    if (!task) return res.status(404).json({ msg: "Task not found" })
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateTask=async(req,res)=>{
  try{
    const task=await Task.findOneAndUpdate({
    _id:req.params.id,
    user:req.user.id,
   },
   {
    title:req.body.title,
    description:req.body.description,
    status:req.body.status
   },{new:true})
   if(!task){
    res.json({msg:"No task Exist"})
   }
   res.json(task);
  }catch(error){
    res.status(300).send(error)
  }
}

exports.deleteTask=async(req,res)=>{
  try{
    const task=await Task.findOneAndDelete({
      _id:req.params.id,
      user:req.user.id
    })
    if(!task){
      res.json({msg:"No task Exist"})
    }
    res.json({msg:"Task deleted successfully", task})
  }catch(error){
    res.send(error)
  }
}