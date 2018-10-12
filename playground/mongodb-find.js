const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err){
        return console.log('Error connecting to the server');
    }
    const db = client.db('TodoApp');
    //to Array returns a promise
    //querying database with completed = false
    
    
    // db.collection('Todos').find({_id: new ObjectID('5bbde31f168f2e737301c79a')}).toArray().then((data) => {

    //     console.log('Data');
    //     console.log(JSON.stringify(data, undefined, 2));
    // },(error) => {
    //     console.log('Error happened ', error);
        
    // });

    // db.collection('Todos').find().count().then((count) => {

    //     console.log(`Todos count ${count}`);
       
    // },(error) => {
    //     console.log('Error happened ', error);
        
    // });

    db.collection('Users').find({name:'Olga'}).toArray().then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    }, (error) => {
        console.log('There was an error ', error);
        
    });
    
    client.close();
    
});
