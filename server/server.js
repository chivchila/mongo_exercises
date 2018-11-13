//we have mongoose configuration in the separate file and we can require that file right here
//pulling out mongoose property using es 6 destucturing 
//we are creating a local variable called mongoose that equals to mongoose property 
//on the object and that object is goingt o be a return result 
//from requiring file we just created that's in db directory and it's called mongoose.js and 
//ommit .js 

var {mongoose} = require ('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//app.use takes the middleware 
//bodyParser.json() return value is a function
// which is a middleware which we need to give to express
// with this in place we can give json to express application
app.use(bodyParser.json()); 


//CRUD operation - post for creating new obj by sending json

// for creating new todos
app.post('/todos', (req, res) => {
    
    //where the body gets stored by bodyParser
    var todo = new Todo(
        {
            text: req.body.text,
        }
    );
    //saving to the database
    todo.save().then((doc) => {
        res.send(doc) // will send user back id 
    }//callback for the success case 
    ,(e) => 
        {
            res.status(400).send(e);
        }
    )
})
app.listen(3000, () => {
    console.log('Started on port 3000');
})

/*
//var newThingToDo = new Todo({text: 'Cook new dinner'});//not required others
//var newThingToDo = new Todo({text: 'Feed the cat', completed: true, completedAt : new Date()});//not required others
var newThingToDo= new Todo({text: 28});
//save methid is saving data to mongo db and save returns a Promise
newThingToDo.save().then((doc)=>{//in the case of success we get that doc
    console.log('Saved doc ', doc);
    
}, (e) => {
    console.log('Error occured: ', e);
    
} );

var newUser = new User ({email: 'chivchila@gmail.com'});
newUser.save().then((user) => {
    console.log('User was saved: ' , user);
    
}, (e) => {
    console.log("Error has happened ", e);
    
});
*/