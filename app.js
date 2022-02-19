// Modules
const express = require('express');
const bodyParser = require('body-parser');
const functions = require(__dirname + "/functions.js");

// Variables
const app = express();
const port = 2188;
const tasks = [];
const workTasks = [];


// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs"); // Embedded Javascript templating (Like jingo in django) 


// Routes
app.get('/', function(req, res){
    res.render('list', {day : functions.getDay(), listTitle: "Task List", tasks: tasks, path : '/work', redirectText: 'Go to Work List'});
});

app.get('/work', function(req, res){
    res.render('list', {day: functions.getDay(), listTitle: "Work List", tasks: workTasks, path : '/', redirectText: 'Go to Task List'});
});


// Post Requests
app.post('/', function(req, res){
    newTask = req.body.newTask;
    if (newTask != ''){
        if (req.body.list == "Task"){
            tasks.push(newTask);
            res.redirect('/');
        } else if (req.body.list == "Work"){
            workTasks.push(newTask);
            res.redirect('/work');
        }
    }
});


// Port Listener
app.listen(port, function(){
    console.log(`Server started on port ${port}`);
});