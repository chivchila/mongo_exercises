//const MongoClient = require('mongodb').MongoClient;
//pulling out attributes from mongo db
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

/* 
Destructuring example
var user = {name :'Olga', age: 35}
var {name} = user;
console.log(name);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err){
        return console.log('Error connecting to the server');
    }
    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({text: 'Something to do', completed:false}, (err, result) =>{
    //     if (err){
    //         return console.log('error inserting a document');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // })

    // console.log('Connected to the mongo server');
    //Insert new doc into the Users collections (name, age, location);

    // const db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'Olga' , 
    //     age: 35, 
    //     location: '21 Capstan Way'
    //     }, (error, result) =>{
    //     if (error){
    //         return console.log('Error: ', error );
    //     }
    //     //console.log(JSON.stringify(result.ops), undefined, 2);
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    
    client.close();
    
});
