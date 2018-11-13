const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err){
        return console.log('Error connecting to the server');
    }
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Throw away trash'}).then((res) => {
    //     console.log('Deleted: ', res);
        
    // });
    
    //deleteOne - deletes first item that matches the criteria
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((res) =>{
    //     console.log(res);
        
    // });

    //findOneAndDelete
    //get the documtnt that has been deleted back
    db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result)=>{
        console.log('result ' , result);
        
    })

    //client.close();
})