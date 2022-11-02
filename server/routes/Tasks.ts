const expressT = require("express");
const mongooseT = require("mongoose");
const Task  = require("../models/Task.ts");
const Category = require("../models/Category.ts");

const routerT = expressT.Router();

// post a task (by async await method)
routerT.post('/', async (req, res) => {
    const category = await Category.findById(req.body.category);
    if (!category){
        return res.status(400).send('Invalid category');
    }

    let task = new Task({
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        category:req.body.category
    });

    task = await task.save();

    if (!task){
        return res.status(404).send('the task cannot be created');
    }

    res.status(200).send(task);
});

// update a task by id (by async await method)
routerT.put('/:id', async (req, res) => {
    if (!mongooseT.isValidObjectId(req.params.id)){
        return res.status(400).send('Invalid task Id');
    }
    const category = await Category.findById(req.body.category);
    if (!category){
        return res.status(400).send('Invalid category');
    }

    const task = await Task.findByIdAndUpdate(req.params.id, 
        {
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        category:req.body.category
        },
        {new:true}
        );
   
    if(!task){
        res.status(500).json({success:false, message:"The category cannot be updated"});
    }
   
    res.status(200).send(task);
});

// deleting a task (by promise method)
routerT.delete('/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id).then((task) =>{
        if (task){
            return res.status(200).json({success:true, message:"this task is deleted"});
        } else {
            return res.status(404).json({success:false,message:"can't find task to delete"});
        }
    }).catch((err) => {
        return res.status(404).json({success:false,error:err});
    })
});

// get all task (for user)
routerT.get('/', async (req, res) => {
    const taskList = await Task.find()
   // .select('name image -_id')    // to display only these things from all list
   // .populate('category') // to display all details of category not only the id, here 'category'
                            // coming from schema of task where category field is given a objectId 
   ;
   
    if(!taskList){
        res.status(500).json({success:false});
    }
   
    res.status(200).send(taskList);
});

// get a task by id (by async await method)
routerT.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
   
    if(!task){
        res.status(500).json({success:false, message:"The task with given id is not found"});
    }
   
    res.status(200).send(task);
});

// admin want to know how many task he had listed (to modify later)
routerT.get('/get/count', async (req, res) => {
    const taskCount = await Task.countDocuments((count) => count);
   
    if(!taskCount){
        res.status(500).json({success:false});
    }
   
    res.status(200).send({
        taskCount:taskCount
    });
});

// featured tasks
routerT.get('/get/featured', async (req, res) => {
    const tasks = await Task.find({featured:true});
   
    if(!tasks){
        res.status(500).json({success:false});
    }
   
    res.status(200).send(tasks);
});

// featured tasks (show 'count' numbers of tasks only ) (user give some input)
routerT.get('/get/featured/:count', async (req, res) => {
    const count = req.params.count ? req.params.count : 0 ;
    const tasks = await Task.find({featured:true}).limit(+count) ;  // here count is string and limit
                                                                          // take a int so + make
                                                                          // it int
    if(!tasks){
        res.status(500).json({success:false});
    }
   
    res.status(200).send(tasks);
});

// get tasks by categories (can use as filter)
   // localhost:3300/api/v1/tasks?categories=234566,456787
routerT.get('/', async (req, res) => {
  
    let filter = {};
    if (req.query.categories){
        filter = {category: req.query.categories.split(',')}
    }

    const taskList = await Task.find(filter).populate('category') ;
   
    if(!taskList){
        res.status(500).json({success:false});
    }
   
    res.status(200).send(taskList);
});

module.exports = routerT;